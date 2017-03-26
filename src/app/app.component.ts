import {Component, Inject} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    /**
     * Lista de vídeos
     */
    videos = {};

    constructor(@Inject('youtube') private youtube) {
        this.getVideos();
    }

    /**
     * Carrega os vídeos do youtube
     */
    getVideos() {

        this.youtube.get().then(response => {
            this.videos = response;
        });
    }


}
