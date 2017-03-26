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

    constructor(@Inject('youtube') private youtube,) {
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

        this.page++;
    }

    selectVideo(event, video) {
        event.preventDefault();
        this.youtube.starredVideo = video;
    }

}
