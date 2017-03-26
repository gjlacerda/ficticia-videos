import {Component, OnInit, Inject} from '@angular/core';

@Component({
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnInit {

    constructor(@Inject('youtube') private youtube) {
    }

    ngOnInit() {
    }

}
