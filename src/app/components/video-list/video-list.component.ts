import {Component, OnChanges, Input} from '@angular/core';

@Component({
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnChanges {

    @Input() videos;

    private readonly take = 4;
    private page = 0;
    private videosPaginated = [];

    constructor() {
    }

    ngOnChanges(changes) {

        if (changes.videos.firstChange) {
            return;
        }

        this.paginateVideos();
    }

    /**
     * Lista novos vídeos de 4 em 4
     */
    paginateVideos() {

        let initial = this.page * this.take,
            newVideos = this.videos.splice(initial, this.take);

        this.videosPaginated.push(...newVideos);

        this.page++;
    }

}
