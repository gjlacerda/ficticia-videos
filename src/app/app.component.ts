import {Component, Inject} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(@Inject('youtube') private youtube) {
        this.youtube.get();
    }

    /**
     * Abre/fecha o dropdown de links
     */
    toggleDropdown() {
        document.querySelector('.dropdown-nav').classList.toggle('active');
    }

}
