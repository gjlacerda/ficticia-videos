import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-video-search',
    templateUrl: './video-search.component.html',
    styleUrls: ['../videos/videos.component.less']
})
export class VideoSearchComponent implements OnInit {

    private term: string;
    public videos = [];

    // Flag indicando se realizou algumas pesquisa
    searchDirty = false;

    constructor(@Inject('youtube') private youtube, private route: ActivatedRoute) {
        this.youtube.get().then(() => {
            this.filterVideos();
        });
    }

    /**
     * Retorna true se não encontrar nenhum resultado
     * @returns {boolean}
     */
    get noContent() {
        return this.searchDirty && !this.videos.length;
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.term = params['term'];
            this.filterVideos();
        });

    }

    /**
     * Filtra os vídeos de acordo com o termo passado, verificando o título e a descrição
     */
    filterVideos() {

        if (!this.youtube.videos.length) {
            return;
        }

        // Se não houver termo, retorna todos os vídeos
        if (!this.term) {
            this.videos = this.youtube.videos;
            return;
        }

        this.videos = this.youtube.videos.filter(video => {

            let title = video.snippet.title.toLowerCase(),
                description = video.snippet.description.toLowerCase();

            this.searchDirty = true;

            return title.indexOf(this.term) !== -1 || description.indexOf(this.term) !== -1;
        });
    }
}
