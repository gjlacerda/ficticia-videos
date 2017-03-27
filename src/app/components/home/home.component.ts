import {Component, OnInit, Inject} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    constructor(@Inject('youtube') private youtube) {
        this.youtube.get();
        this.registerEvents();
    }

    ngOnInit() {
    }

    /**
     * Scroll para o começo do body quando clicar em um vídeo
     */
    registerEvents() {

        document.body.addEventListener('click', event => {

            if (event.target['className'] === 'thumb') {
                document.body.scrollTop = 0;
            }

        });
    }

}
