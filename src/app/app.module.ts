import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {VideoListComponent} from './components/video-list/video-list.component';
import {PlayerComponent} from './components/player/player.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {VideosComponent } from './components/videos/videos.component';
import {YoutubeService} from "./services/youtube/youtube.service";
import {FicticiaService} from "./services/ficticia/ficticia.service";
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';

@NgModule({
    declarations: [
        AppComponent,
        VideoListComponent,
        PlayerComponent,
        HomeComponent,
        VideosComponent,
        VideoModalComponent,
        VideoSearchComponent
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
            },
            {
                path: 'videos/search/:term',
                component: VideoSearchComponent
            },
        ])
    ],
    providers: [
        {
            provide: 'youtube',
            useClass: YoutubeService
        },
        {
            provide: 'ficticia',
            useClass: FicticiaService
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
