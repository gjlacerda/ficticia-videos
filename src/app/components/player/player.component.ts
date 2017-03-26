import {Component, OnInit, Input, Inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit {

    @Input() video;

    constructor(
        @Inject('youtube') private youtube,
        @Inject('ficticia') private ficticia,
        private sanitizer: DomSanitizer
    ) {}

    /**
     * Url para embed
     * @returns {any|string}
     */
    getEmbedUrl() {

        // Essa url é fake. Isto foi necesário para não causar erro de URL insegura do angular enquanto não carrega o vídeo principal
        let tempUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtube.getEmbedUrl(''));

        let videoId = this.video.id && this.video.id.videoId;

        if (videoId) {
            tempUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtube.getEmbedUrl(videoId));
        }

        return tempUrl;
    }

    ngOnInit() {
    }

}
