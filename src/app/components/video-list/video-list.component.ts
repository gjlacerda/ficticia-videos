import {Component, OnChanges, Input, Inject} from '@angular/core';

@Component({
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnChanges {

    @Input() videos;
    @Input() take;

    private page = 0;
    private videosPaginated = [];

    // Flag para esconder o botão de carregar mais
    noContent = false;

    constructor(@Inject('youtube') private youtube,) {
    }

    /**
     * Retorna a classe css do botão de ação
     * @returns {{disabled: boolean}}
     */
    get cssAction() {
        return {
            'disabled': this.noContent
        }
    }

    ngOnChanges(changes) {

        if (!changes.videos.currentValue.length) {
            return;
        }

        this.paginateVideos();
    }

    /**
     * Lista novos vídeos de acordo com a propriedade take
     */
    paginateVideos() {

        let initial = this.page * +this.take,
            final = initial + +this.take,
            newVideos = this.videos.slice(initial, final);

        this.videosPaginated.push(...newVideos);
        this.noContent = !newVideos.length;

        this.page++;
    }

    selectVideo(event, video) {

        event.preventDefault();

        this.youtube.starredVideo = video;
    }

}
