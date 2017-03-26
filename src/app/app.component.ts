import {Component, Inject} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(@Inject('youtube') private youtube) {
        this.youtube.get();
    }

}
