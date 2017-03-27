import {Component, OnInit, Inject} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    $videoScroll;
    $videoList;

    // Remove esse evento ao destruir o componente
    eventListenerRemovable;

    constructor(@Inject('youtube') public youtube) {
        this.youtube.get();
        this.registerEvents();
    }

    /**
     * Eventos DOM
     */
    private registerEvents() {

        this.eventListenerRemovable = evt => this.getAllEvents(evt);

        document.body.addEventListener('click', this.eventListenerRemovable);
    }

    /**
     * Todos os eventos de DOM
     */
    private getAllEvents(event) {

        // Scroll para o começo do body quando clicar em um vídeo
        if (event.target['className'] === 'thumb') {
            document.body.scrollTop = 0;
        }

        // Anima o scroll da listagem de vídeos
        if (event.target['className'] === 'video-action') {

            if (!this.$videoScroll) {
                this.$videoScroll = document.querySelector('.video-scroll');
                this.$videoList = document.querySelector('.video-list');
            }

            this.$videoScroll.scrollTop = this.$videoList.clientHeight - this.$videoScroll.clientHeight;
        }
    }

    ngOnDestroy() {
        document.body.removeEventListener('click', this.eventListenerRemovable);
    }

    ngOnInit() {
    }


}
