import {Component, OnInit, OnChanges, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-video-search',
    templateUrl: './video-search.component.html',
    styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit, OnChanges {

    private term: string;
    public videos;

    constructor(@Inject('youtube') private youtube, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.term = params['term'];
        });

    }

    ngOnChanges(changes) {
    }

}
