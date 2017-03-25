import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {VideoListComponent} from './video-list/video-list.component';
import {PlayerComponent} from './player/player.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import { VideosComponent } from './videos/videos.component';

@NgModule({
    declarations: [
        AppComponent,
        VideoListComponent,
        PlayerComponent,
        HomeComponent,
        VideosComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'videos',
                component: VideosComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
