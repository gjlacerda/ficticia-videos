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

        if (!changes.videos.currentValue.length) {
            return;
        }

        this.paginateVideos();
    }

    paginateVideos() {

        let initial = this.page * this.take;

        this.videosPaginated = this.videos.splice(initial, this.take);

        this.page++;

    }

}
