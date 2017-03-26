import {Component, OnInit, Inject} from '@angular/core';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.less']
})
export class VideosComponent implements OnInit {

    constructor(@Inject('youtube') private youtube) {
        this.youtube.get();
    }

    ngOnInit() {
    }

}
