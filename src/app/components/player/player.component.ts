import {Component, OnChanges, Input, Inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnChanges {

    @Input() video;

    urlVideo;

    constructor(
        @Inject('youtube') private youtube,
        @Inject('ficticia') public ficticia,
        private sanitizer: DomSanitizer
    ) {}

    /**
     * Url para embed
     * @returns {any|string}
     */
    getEmbedUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtube.getEmbedUrl(this.video.id.videoId));
    }

    ngOnChanges(changes) {

        if (!changes.video.currentValue.id) {
            return;
        }

        this.urlVideo = this.getEmbedUrl();
    }

}
