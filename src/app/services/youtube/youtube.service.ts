import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class YoutubeService {

    private readonly key = 'AIzaSyDjnyFJaetyEUUGb-66vndx12oj3mw_60s';
    private readonly channelId = 'UCsn6cjffsvyOZCZxvGoJxGg';
    private readonly youtubeApiSearch = 'https://www.googleapis.com/youtube/v3/search';
    private readonly youtubeApiVideo = 'https://www.googleapis.com/youtube/v3/videos';

    constructor(private http: Http) {
    }

    /**
     * Busca os dados/vídeos do canal
     * @returns {Promise<T>}
     */
    get(): Promise<any> {

        return new Promise((resolve, reject) => {

            this.getYoutubeChannelData().then(channelData => {

                if (!channelData.length) {
                    reject();
                }

                this.getYoutubeVideoData(channelData).then(channelVideo => {

                    let processedData = this.processData(channelData, channelVideo);

                    resolve(processedData);
                });
            });

        });
    }

    /**
     * Faz uma busca na API para buscar todos os vídeos do canal
     * @returns {any}
     */
    getYoutubeChannelData(): Promise<any> {

        let params = {
            key: this.key,
            channelId: this.channelId,
            part: 'snippet,id',
            order: 'date',
            type: 'video',
            maxResults: 20
        };

        let urlApi = this.mountUrl(this.youtubeApiSearch, params);

        return this.http.get(urlApi)
            .map(response => response.json().items)
            .toPromise();
    }

    /**
     * Faz uma busca na api passando os IDS dos vídeos encontrados no método getYoutubeSearch
     * Esse passo é necessário pois o outro método não trás informações como duração do vídeo, views, etc...
     * @param listVideos
     * @returns {any}
     */
    getYoutubeVideoData(listVideos): Promise<any> {

        let params = {
            key: this.key,
            id: this.getListVideoIds(listVideos),
            part: 'contentDetails,statistics',
            maxResults: 20
        };

        let urlApi = this.mountUrl(this.youtubeApiVideo, params);

        return this.http.get(urlApi)
            .map(response => response.json().items)
            .toPromise();
    }

    /**
     * Monta a url com os parâmetros GET
     * @param url
     * @param params
     * @returns {string}
     */
    private mountUrl(url, params): string {

        let paramKeys = Object.keys(params);

        let arrKeys = paramKeys.map(key => {
            let value = params[key];
            return `${key}=${value}`;
        });

        let stringKeys = arrKeys.join('&');

        return `${url}?${stringKeys}`;
    }

    /**
     * Retorna uma lista de de IDS dos vídeos
     * @param listVideos
     */
    private getListVideoIds(listVideos): string {
        return listVideos.map(video => video.id.videoId).join();
    }

    /**
     * Junta as informações do vídeo no objeto do canal
     * @param channelData
     * @param videoData
     * @returns {any}
     */
    private processData(channelData, videoData) {

        for (let i = 0; i < videoData.length; i++) {
            channelData[i].contentDetails = videoData[i].contentDetails;
            channelData[i].statistics = videoData[i].statistics;
        }

        return channelData;
    }
}