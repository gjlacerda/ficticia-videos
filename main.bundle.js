webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var VideoModalComponent = (function () {
    function VideoModalComponent(youtube) {
        this.youtube = youtube;
        this.modalOpenClass = 'modal-opened';
        this.$body = document.body;
        this.$playerIframe = null;
        this.registerEvents();
    }
    /**
     * Remove a classe css do modal no body para fechá-lo
     */
    VideoModalComponent.prototype.closeModal = function () {
        this.stopVideo();
        this.$body.classList.remove(this.modalOpenClass);
    };
    /**
     * Adiciona a classe css do modal no body para abrir
     */
    VideoModalComponent.prototype.openModal = function () {
        this.$body.classList.add(this.modalOpenClass);
    };
    /**
     * Para o vídeo removendo seu src
     */
    VideoModalComponent.prototype.stopVideo = function () {
        this.$playerIframe = this.$playerIframe || document.querySelector('.player-iframe');
        this.$playerIframe.removeAttribute('src');
    };
    /**
     * Eventos DOM
     */
    VideoModalComponent.prototype.registerEvents = function () {
        var _this = this;
        this.eventListenerRemovable = function (evt) { return _this.shouldOpenModal(evt); };
        // Quando clicar no body verifica se clicou no elemento passado por Input. Se positivo, abre o modal
        this.$body.addEventListener('click', this.eventListenerRemovable);
    };
    VideoModalComponent.prototype.shouldOpenModal = function (event) {
        if (event.target['className'] === this.toggle) {
            this.openModal();
        }
    };
    VideoModalComponent.prototype.ngOnDestroy = function () {
        this.$body.removeEventListener('click', this.eventListenerRemovable);
    };
    VideoModalComponent.prototype.ngOnInit = function () {
    };
    return VideoModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], VideoModalComponent.prototype, "toggle", void 0);
VideoModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-video-modal',
        template: __webpack_require__(167),
        styles: [__webpack_require__(162)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])('youtube')),
    __metadata("design:paramtypes", [Object])
], VideoModalComponent);

//# sourceMappingURL=video-modal.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var VideoSearchComponent = (function () {
    function VideoSearchComponent(youtube, route) {
        var _this = this;
        this.youtube = youtube;
        this.route = route;
        this.videos = [];
        // Flag indicando se realizou algumas pesquisa
        this.searchDirty = false;
        this.youtube.get().then(function () {
            _this.filterVideos();
        });
    }
    Object.defineProperty(VideoSearchComponent.prototype, "noContent", {
        /**
         * Retorna true se não encontrar nenhum resultado
         * @returns {boolean}
         */
        get: function () {
            return this.searchDirty && !this.videos.length;
        },
        enumerable: true,
        configurable: true
    });
    VideoSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.term = params['term'].toLowerCase();
            // Foi necessário limpar a variável e fazer uma nova pesquisa dentro de um timeout cada vez que tentar navegar para a mesma rota alterando apenas
            // o final da URL. Este é um bug do Router do angular 4.0
            // https://github.com/angular/angular/issues/9811
            _this.videos = [];
            setTimeout(function () {
                _this.filterVideos();
            });
        });
    };
    /**
     * Filtra os vídeos de acordo com o termo passado, verificando o título e a descrição
     */
    VideoSearchComponent.prototype.filterVideos = function () {
        var _this = this;
        if (!this.youtube.videos.length) {
            return;
        }
        // Se não houver termo, retorna todos os vídeos
        if (!this.term) {
            this.videos = this.youtube.videos;
            return;
        }
        this.videos = this.youtube.videos.filter(function (video) {
            var title = video.snippet.title.toLowerCase(), description = video.snippet.description.toLowerCase();
            _this.searchDirty = true;
            return title.indexOf(_this.term) !== -1 || description.indexOf(_this.term) !== -1;
        });
    };
    return VideoSearchComponent;
}());
VideoSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-video-search',
        template: __webpack_require__(168),
        styles: [__webpack_require__(73)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])('youtube')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], VideoSearchComponent);

var _a;
//# sourceMappingURL=video-search.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var VideosComponent = (function () {
    function VideosComponent(youtube) {
        this.youtube = youtube;
        this.youtube.get();
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    return VideosComponent;
}());
VideosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-videos',
        template: __webpack_require__(169),
        styles: [__webpack_require__(73)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])('youtube')),
    __metadata("design:paramtypes", [Object])
], VideosComponent);

//# sourceMappingURL=videos.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FicticiaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FicticiaService = (function () {
    function FicticiaService() {
    }
    /**
     * Formata a data para 00/00/0000
     * @param date
     * @returns {string}
     */
    FicticiaService.prototype.formatDateBr = function (date) {
        return new Date(date).toLocaleString('pt-br').split(' ')[0];
    };
    /**
     * Formata o número para 1k+
     * @param number
     */
    FicticiaService.prototype.formatNumber = function (number) {
        if (!number) {
            return;
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    return FicticiaService;
}());
FicticiaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FicticiaService);

//# sourceMappingURL=ficticia.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeService = (function () {
    function YoutubeService(http) {
        this.http = http;
        // O máximo de itens que a API me permite é 50
        this.maxResults = 50;
        this.key = 'AIzaSyDjnyFJaetyEUUGb-66vndx12oj3mw_60s';
        this.channelId = 'UCsn6cjffsvyOZCZxvGoJxGg';
        this.youtubeApiSearch = 'https://www.googleapis.com/youtube/v3/search';
        this.youtubeApiVideo = 'https://www.googleapis.com/youtube/v3/videos';
        /**
         * Lista de vídeos do canal
         * @type {Array}
         */
        this.videos = [];
        /**
         * Video em destaque
         * @type {{}}
         */
        this.starredVideo = {};
    }
    /**
     * Busca os dados/vídeos do canal
     * É necessário fazer duas requisições para obter todos os dados necessários
     */
    YoutubeService.prototype.get = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Se já tiver feito realizado a busca, retorna sem pesquisar
            if (_this.videos.length) {
                resolve();
                return;
            }
            _this.getYoutubeChannelData().then(function (channelData) {
                if (!channelData.length) {
                    return;
                }
                _this.getYoutubeVideoData(channelData).then(function (channelVideo) {
                    _this.videos = _this.processData(channelData, channelVideo);
                    _this.starredVideo = _this.getStarredVideo();
                    resolve();
                });
            });
        });
    };
    /**
     * Retorna o vídeo em destaque (com maior número de likes)
     * @returns {any}
     */
    YoutubeService.prototype.getStarredVideo = function () {
        return this.videos.reduce(function (a, b) {
            return +a.statistics.likeCount > +b.statistics.likeCount ? a : b;
        });
    };
    /**
     * Retorna a url do video do youtube para embed
     * @param videoId
     * @returns {string}
     */
    YoutubeService.prototype.getEmbedUrl = function (videoId) {
        return "https://www.youtube.com/embed/" + videoId;
    };
    /**
     * Faz uma busca na API para buscar todos os vídeos do canal
     * @returns {any}
     */
    YoutubeService.prototype.getYoutubeChannelData = function () {
        var params = {
            key: this.key,
            channelId: this.channelId,
            part: 'snippet,id',
            order: 'date',
            type: 'video',
            maxResults: this.maxResults
        };
        var urlApi = this.mountUrl(this.youtubeApiSearch, params);
        return this.http.get(urlApi)
            .map(function (response) { return response.json().items; })
            .toPromise();
    };
    /**
     * Faz uma busca na api passando os IDS dos vídeos encontrados no método getYoutubeSearch
     * Esse passo é necessário pois o outro método não trás informações como duração do vídeo, views, etc...
     * @param listVideos
     * @returns {any}
     */
    YoutubeService.prototype.getYoutubeVideoData = function (listVideos) {
        var params = {
            key: this.key,
            id: this.getListVideoIds(listVideos),
            part: 'contentDetails,statistics',
            maxResults: this.maxResults
        };
        var urlApi = this.mountUrl(this.youtubeApiVideo, params);
        return this.http.get(urlApi)
            .map(function (response) { return response.json().items; })
            .toPromise();
    };
    /**
     * Monta a url com os parâmetros GET
     * @param url
     * @param params
     * @returns {string}
     */
    YoutubeService.prototype.mountUrl = function (url, params) {
        var paramKeys = Object.keys(params);
        var arrKeys = paramKeys.map(function (key) {
            var value = params[key];
            return key + "=" + value;
        });
        var stringKeys = arrKeys.join('&');
        return url + "?" + stringKeys;
    };
    /**
     * Retorna uma lista de de IDS dos vídeos
     * @param listVideos
     */
    YoutubeService.prototype.getListVideoIds = function (listVideos) {
        return listVideos.map(function (video) { return video.id.videoId; }).join();
    };
    /**
     * Junta as informações do vídeo no objeto do canal
     * @param channelData
     * @param videoData
     * @returns {any}
     */
    YoutubeService.prototype.processData = function (channelData, videoData) {
        for (var i = 0; i < videoData.length; i++) {
            channelData[i].contentDetails = videoData[i].contentDetails;
            channelData[i].statistics = videoData[i].statistics;
        }
        return channelData;
    };
    return YoutubeService;
}());
YoutubeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], YoutubeService);

var _a;
//# sourceMappingURL=youtube.service.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n}\n.home-video-featured {\n  margin-bottom: 15px;\n}\n@media (min-width: 600px) {\n  .home-video-list app-video-list /deep/ .video {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n  }\n}\n@media (min-width: 992px) {\n  .home-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .home-video-featured {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    -ms-flex-preferred-size: 65%;\n        flex-basis: 65%;\n    margin-right: 30px;\n    margin-bottom: 0;\n  }\n  .home-video-featured app-player /deep/ .player-description {\n    height: 165px;\n  }\n  .home-video-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    -ms-flex-preferred-size: 35%;\n        flex-basis: 35%;\n  }\n  .home-video-list app-video-list /deep/ .video {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n  }\n  .home-video-list app-video-list /deep/ .video-scroll {\n    height: 517px;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n}\n.player-container .player {\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 30px;\n  height: 0;\n  overflow: hidden;\n}\n.player-container .player iframe,\n.player-container .player object,\n.player-container .player embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.player-description {\n  margin-top: 15px;\n}\n.player-description .title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 5px;\n}\n.player-description .title h3 {\n  margin-bottom: 0;\n}\n.player-description .description {\n  word-wrap: break-word;\n}\n.player-description .info-md {\n  display: none;\n}\n.player-description .info-md .views,\n.player-description .info-md .date {\n  position: relative;\n  display: inline-block;\n  height: 20px;\n  cursor: pointer;\n}\n.player-description .info-md .views:hover .popover,\n.player-description .info-md .date:hover .popover {\n  display: block;\n}\n.player-description .info-md .views {\n  width: 26px;\n  margin-right: 4px;\n  background: url(" + __webpack_require__(87) + ") no-repeat;\n}\n.player-description .info-md .date {\n  width: 20px;\n  background: url(" + __webpack_require__(86) + ") no-repeat;\n}\n.player-description .info-xs {\n  text-align: right;\n  font-size: 12px;\n  color: #999;\n  margin-top: 10px;\n}\n.player-description .info-xs .views,\n.player-description .info-xs .date {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.player-description .info-xs .views i,\n.player-description .info-xs .date i {\n  height: 20px;\n  display: inline-block;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n}\n.player-description .info-xs .views {\n  margin-right: 10px;\n}\n.player-description .info-xs .views i {\n  width: 26px;\n  background: url(" + __webpack_require__(87) + ") no-repeat;\n}\n.player-description .info-xs .date i {\n  width: 20px;\n  background: url(" + __webpack_require__(86) + ") no-repeat;\n}\n.player-description .popover {\n  display: none;\n  position: absolute;\n  top: -54px;\n  background: white;\n  font-size: 15px;\n  padding: 12px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  border-radius: 4px;\n  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.4);\n  color: #666;\n  white-space: nowrap;\n}\n.player-description .popover:before {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 8px 8px 0 8px;\n  border-color: white transparent transparent transparent;\n  bottom: -8px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n@media (min-width: 992px) {\n  .player-description .title {\n    margin-bottom: 8px;\n  }\n  .player-description .info-xs {\n    display: none;\n  }\n  .player-description .info-md {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n}\n.video-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: -10px;\n}\n.video {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n.video:hover .thumb {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.video-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 10px;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n.video-thumb {\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n  background-color: #000;\n}\n.video-thumb a {\n  display: block;\n  position: relative;\n  padding-bottom: 75%;\n  overflow: hidden;\n  width: 100%;\n}\n.video-thumb .thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  max-width: 100%;\n  margin: 0 auto;\n  transition: -webkit-transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n}\n.video-info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n  margin-left: 10px;\n}\n.video-info a {\n  display: block;\n}\n.video-info .title h3 {\n  margin-bottom: 0;\n}\n.video-info .views {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #aaa;\n  font-size: 13px;\n}\n.video-info .views i {\n  width: 26px;\n  height: 20px;\n  display: inline-block;\n  background: url(" + __webpack_require__(206) + ") no-repeat;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n}\n.video-action {\n  max-width: 400px;\n  display: block;\n  margin-top: 16px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid #bbb;\n  width: 100%;\n  background-color: white;\n  border-radius: 4px;\n  font-size: 9px;\n  text-transform: uppercase;\n  padding: 0;\n  line-height: 30px;\n  cursor: pointer;\n  color: #666;\n  transition: all 0.05s ease-out;\n  transition-property: background-color, color;\n}\n.video-action:hover {\n  background-color: #666;\n  border-color: #666;\n  color: white;\n}\n.video-action.disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n@media (min-width: 992px) {\n  .video-info .views i {\n    margin-right: 5px;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ":host {\n  display: none;\n}\n.videos-modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: white;\n}\n.videos-modal .modal-content {\n  position: relative;\n  padding: 50px 10px 10px;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n  background-color: white;\n  box-sizing: border-box;\n}\n.videos-modal .modal-close {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  font-size: 25px;\n  color: red;\n  padding: 14px;\n  vertical-align: top;\n  line-height: 15px;\n  cursor: pointer;\n}\n.videos-modal app-player /deep/ .box {\n  border: none;\n  box-shadow: none;\n  padding: 0;\n}\n@media (min-width: 992px) {\n  .videos-modal {\n    background-color: rgba(255, 255, 255, 0.9);\n  }\n  .videos-modal .modal-content {\n    max-width: 500px;\n    padding: 50px 22px 22px;\n    height: auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header class=\"header-main\" [ngClass]=\"cssSearch\">\n    <div class=\"header-content container\">\n\n        <!-- Logo -->\n        <div class=\"header-logo\">\n            <a routerLink=\"\">\n                <img src=\"/assets/images/logo.png\" alt=\"Ficticia logo\">\n            </a>\n        </div>\n\n        <!-- Ações -->\n        <div class=\"header-actions\">\n\n            <!-- Pesquisar -->\n            <div class=\"action-search\">\n                <span class=\"search-back\" (click)=\"toggleSearch()\"></span>\n                <span class=\"search-icon\" (click)=\"toggleSearch()\"></span>\n                <span class=\"search-icon submit\" (click)=\"submitSearch()\"></span>\n                <form class=\"search-form\" (ngSubmit)=\"submitSearch()\">\n                    <input type=\"text\" class=\"search-input\" name=\"term\" [(ngModel)]=\"term\">\n                </form>\n            </div>\n\n            <!-- Menu -->\n            <div class=\"action-menu\" (click)=\"toggleDropdown()\">\n                <span class=\"line\"></span>\n                <nav class=\"dropdown dropdown-nav\" [ngClass]=\"cssDropdown\">\n                    <ul>\n                        <li><a routerLink=\"\" class=\"star\">Destaques</a></li>\n                        <li><a routerLink=\"/videos\" class=\"video\">Vídeos</a></li>\n                    </ul>\n                </nav>\n            </div>\n\n        </div>\n\n    </div>\n</header>\n\n<main (click)=\"closeDropdown()\">\n    <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container container\">\n\n    <!-- Vídeos em destaque -->\n    <section class=\"home-video-featured\">\n        <h2>Vídeo em destaque</h2>\n        <app-player [video]=\"youtube.starredVideo\"></app-player>\n    </section>\n\n    <!-- Mais vídeos -->\n    <section class=\"home-video-list\">\n        <h2>+ Vídeos</h2>\n        <app-video-list [videos]=\"youtube.videos\" data-take=\"4\"></app-video-list>\n    </section>\n\n</div>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<!-- Player de vídeo -->\n<div class=\"player-container\">\n    <div class=\"player\">\n        <iframe width=\"1920\" height=\"1080\" class=\"player-iframe\" frameborder=\"0\" allowfullscreen [src]=\"urlVideo\" *ngIf=\"urlVideo\"></iframe>\n    </div>\n</div>\n\n<!-- Descrição do vídeo -->\n<div class=\"player-description box\">\n    <div class=\"title\">\n        <h3>{{ video.snippet?.title }}</h3>\n        <div class=\"info-md\">\n            <div class=\"views\">\n                <div class=\"popover\">\n                    {{ ficticia.formatNumber(video.statistics?.viewCount) }} views\n                </div>\n            </div>\n\n            <div class=\"date\">\n                <div class=\"popover\">\n                    {{ ficticia.formatDateBr(video.snippet?.publishedAt) }}\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <p class=\"description\">{{ video.snippet?.description }}</p>\n\n    <div class=\"info-xs\">\n        <span class=\"views\">\n            <i></i> {{ ficticia.formatNumber(video.statistics?.viewCount) }}\n        </span>\n        <span class=\"date\">\n            <i></i>\n            {{ ficticia.formatDateBr(video.snippet?.publishedAt) }}\n        </span>\n    </div>\n</div>"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n    <div class=\"video-scroll\">\n        <ul class=\"video-list\">\n\n            <li class=\"video\" *ngFor=\"let video of videosPaginated\" (click)=\"selectVideo($event, video)\">\n                <div class=\"video-content\">\n\n                    <div class=\"video-thumb\">\n                        <a href=\"\">\n                            <img [src]=\"video.snippet.thumbnails.high.url\" class=\"thumb\">\n                        </a>\n                    </div>\n\n                    <div class=\"video-info\">\n                        <a href=\"\" class=\"title\">\n                            <h3>{{ video.snippet.title }}</h3>\n                        </a>\n                        <span class=\"views\">\n                            <i></i>\n                            {{ ficticia.formatNumber(video.statistics.viewCount) }} views\n                        </span>\n                    </div>\n                </div>\n            </li>\n\n        </ul>\n    </div>\n\n    <button type=\"button\" class=\"video-action\" (click)=\"paginateVideos()\" [ngClass]=\"cssAction\">\n        Carregar mais vídeos...\n    </button>\n</div>"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal videos-modal\">\n    <div class=\"modal-content\">\n        <span class=\"modal-close\" (click)=\"closeModal()\">&times;</span>\n        <app-player [video]=\"youtube.starredVideo\"></app-player>\n    </div>\n</div>"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div class=\"videos-search container\">\n\n    <!-- Listagem de vídeos filtrada -->\n    <section class=\"videos-list\">\n        <h2>Resultado para: {{ term }}</h2>\n        <app-video-list [(videos)]=\"videos\" *ngIf=\"videos.length\" data-take=\"12\"></app-video-list>\n    </section>\n\n    <!-- Sem resultados -->\n    <p *ngIf=\"noContent\">Nenhum vídeo encontrado com esse termo.</p>\n\n    <!-- Modal com o player -->\n    <app-video-modal data-toggle=\"thumb\"></app-video-modal>\n\n</div>"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<div class=\"videos-container container\">\n\n    <!-- Todos vídeos -->\n    <section class=\"videos-list\">\n        <h2>Todos os vídeos do Canal</h2>\n        <app-video-list [videos]=\"youtube.videos\" data-take=\"12\"></app-video-list>\n    </section>\n\n    <!-- Modal com o player -->\n    <app-video-modal data-toggle=\"thumb\"></app-video-modal>\n\n</div>"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAATCAAAAACv25LnAAAAu0lEQVQoz3WRsQ7CMAxE8/+f8pBFJBAsbGFgg4kFCXbEUCFSIlJxqA3QDu0tVvzk2Gc7fVWfNmabU/17uxJy4KttHoJo/GWxB48ZcIxNE4/A7PEDT4NlKj+kJdizgDa/blQHCLWaVSFOyWCRVYGdD1TKC7Ak9/Jd/j2HStrP3x3xLxfAZ+kOJOnCXcoeggNukq7ALkfPVdINGFZ0+lcMerTqewymatVPVXysRnxMO5/e1fR2pbwdv8fIBT8rPoGV/1IiNAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(89);


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n}\n.videos-list app-video-list /deep/ .box {\n  border: none;\n  box-shadow: none;\n  padding: 0;\n}\n@media (min-width: 600px) {\n  app-video-list /deep/ .video {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n  }\n}\n@media (min-width: 992px) {\n  app-video-list /deep/ .video {\n    -ms-flex-preferred-size: 33.3333%;\n        flex-basis: 33.3333%;\n  }\n  app-video-list /deep/ .video-thumb {\n    -ms-flex-preferred-size: 55%;\n        flex-basis: 55%;\n  }\n  app-video-list /deep/ .video-info {\n    -ms-flex-preferred-size: 45%;\n        flex-basis: 45%;\n  }\n  app-video-list /deep/ .video-content {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n  app-video-list /deep/ .video-list {\n    margin-top: -10px;\n    margin-bottom: -10px;\n  }\n  app-video-list /deep/ .video-action {\n    margin-top: 20px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAABFjsb+AAAAXVBMVEX///+Kz+BgvtXP6/KU0+PC5u/V7vRfvdX+///7/f5nwNfA5e98yd30+/z9/v/6/f5/yt3o9vmZ1eTv+fv+/v+IzuDI6PGLz+Hl9Pij2edivtbn9flkv9bp9vnt+PrRc7ZQAAAAm0lEQVQoz22QN5LDMAADVxLJJRWdffn/z3RBaq6wUGIwSABQhjA6hqGwI8feij7mSq2d/+hWgNypc1q2Jc1ql4GoTpnyB3lSI5ReJyg/RmDSvjDonOFXA5BnHQiagHPlSBoYdancHWDREXUDruoD2NRdx0VNTdf8uD3V7+rXcmE96WfNbf2Acvr6qP32HQBr23G49+iXw//efn4BHrUIS+OVbBMAAAAASUVORK5CYII="

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAATCAMAAAC9bj0JAAAAdVBMVEX///9fvdVlwNf3/P1qwtjs9/ry+vxwxNmN0OHw+fv6/f5ivtZkv9ZpwdhyxdqAy96x3+u84+3j8/jn9fnr9/rt+Prv+Pv2+/34/P3+/v/+//92x9uP0eLX7vTc8fZ3x9uO0OGX1OSl2uem2ujA5e/D5u/i8/eBKi+WAAAArElEQVQoz3WRxxKCUBRDc14DAQUVFLDX//9EFxaeM5Bl7mRSrvTBZlkWRbnc6B/tmQ/2bcx7ww/GD3ydA5XPMl8Bef3lZwYWQep7KSzAzAb+lKlJIW2U7b6XYCCxWoG531jJJmCCtHWQWHVzeErXeSebgNsqBWelNRCkB2vJOkgFHCUdgIv1joOkIxArAAZF5AEweESpgCjVu8dupMd08+mtpteV2v34P0Y++AKz0QkzHhAMZgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 88;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AppComponent = (function () {
    function AppComponent(youtube, router) {
        this.youtube = youtube;
        this.router = router;
        this.$searchInput = null;
        this.dropdownActive = false;
        this.searchActive = false;
        this.term = '';
    }
    Object.defineProperty(AppComponent.prototype, "cssSearch", {
        /**
         * Retorna a classe css correta se estiver ativo a barra de pesquisa
         * @returns {{active: boolean}}
         */
        get: function () {
            return {
                'header-search': this.searchActive
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "cssDropdown", {
        get: function () {
            return {
                'active': this.dropdownActive
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Abre/fecha o dropdown de links
     */
    AppComponent.prototype.toggleDropdown = function () {
        this.dropdownActive = !this.dropdownActive;
    };
    /**
     * Fecha o dropdown ao clicar no Main caso esteja aberto
     */
    AppComponent.prototype.closeDropdown = function () {
        if (this.dropdownActive) {
            this.dropdownActive = false;
        }
    };
    /**
     * Mostra esconde a barra de pesquisa
     */
    AppComponent.prototype.toggleSearch = function () {
        var _this = this;
        this.searchActive = !this.searchActive;
        // Adiciona o foco no campo se estiver ativo o a busca
        if (this.searchActive) {
            this.$searchInput = this.$searchInput || document.querySelector('.search-input');
            // O timeout é necessário para conseguir capturar o input
            setTimeout(function () {
                _this.$searchInput.focus();
            });
        }
    };
    /**
     * Faz a busca de acordo com o termo
     */
    AppComponent.prototype.submitSearch = function () {
        // Fecha o campo de busca
        this.toggleSearch();
        this.router.navigate(['/videos/search', this.term]);
        this.term = '';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(163)
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])('youtube')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_video_list_video_list_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_player_player_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_videos_videos_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_youtube_youtube_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_ficticia_ficticia_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_video_modal_video_modal_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_video_search_video_search_component__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_video_list_video_list_component__["a" /* VideoListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_videos_videos_component__["a" /* VideosComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_video_modal_video_modal_component__["a" /* VideoModalComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_video_search_video_search_component__["a" /* VideoSearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: 'videos',
                    component: __WEBPACK_IMPORTED_MODULE_9__components_videos_videos_component__["a" /* VideosComponent */]
                },
                {
                    path: 'videos/search',
                    component: __WEBPACK_IMPORTED_MODULE_13__components_video_search_video_search_component__["a" /* VideoSearchComponent */]
                },
                {
                    path: 'videos/search/:term',
                    component: __WEBPACK_IMPORTED_MODULE_13__components_video_search_video_search_component__["a" /* VideoSearchComponent */]
                },
            ])
        ],
        providers: [
            {
                provide: 'youtube',
                useClass: __WEBPACK_IMPORTED_MODULE_10__services_youtube_youtube_service__["a" /* YoutubeService */]
            },
            {
                provide: 'ficticia',
                useClass: __WEBPACK_IMPORTED_MODULE_11__services_ficticia_ficticia_service__["a" /* FicticiaService */]
            },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var HomeComponent = (function () {
    function HomeComponent(youtube) {
        this.youtube = youtube;
        this.youtube.get();
        this.registerEvents();
    }
    /**
     * Eventos DOM
     */
    HomeComponent.prototype.registerEvents = function () {
        var _this = this;
        this.eventListenerRemovable = function (evt) { return _this.getAllEvents(evt); };
        document.body.addEventListener('click', this.eventListenerRemovable);
    };
    /**
     * Todos os eventos de DOM
     */
    HomeComponent.prototype.getAllEvents = function (event) {
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
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        document.body.removeEventListener('click', this.eventListenerRemovable);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(164),
        styles: [__webpack_require__(159)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])('youtube')),
    __metadata("design:paramtypes", [Object])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PlayerComponent = (function () {
    function PlayerComponent(youtube, ficticia, sanitizer) {
        this.youtube = youtube;
        this.ficticia = ficticia;
        this.sanitizer = sanitizer;
    }
    /**
     * Url para embed
     * @returns {any|string}
     */
    PlayerComponent.prototype.getEmbedUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtube.getEmbedUrl(this.video.id.videoId));
    };
    PlayerComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.video.currentValue.id) {
            return;
        }
        this.urlVideo = this.getEmbedUrl();
    };
    return PlayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PlayerComponent.prototype, "video", void 0);
PlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-player',
        template: __webpack_require__(165),
        styles: [__webpack_require__(160)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])('youtube')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])('ficticia')),
    __metadata("design:paramtypes", [Object, Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], PlayerComponent);

var _a;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var VideoListComponent = (function () {
    function VideoListComponent(youtube, ficticia) {
        this.youtube = youtube;
        this.ficticia = ficticia;
        this.videosPaginated = [];
        this.page = 0;
        // Flag para esconder o botão de carregar mais
        this.noContent = false;
    }
    Object.defineProperty(VideoListComponent.prototype, "cssAction", {
        /**
         * Retorna a classe css do botão de ação
         * @returns {{disabled: boolean}}
         */
        get: function () {
            return {
                'disabled': this.noContent
            };
        },
        enumerable: true,
        configurable: true
    });
    VideoListComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.videos.currentValue.length) {
            return;
        }
        this.paginateVideos();
    };
    /**
     * Lista novos vídeos de acordo com a propriedade take
     */
    VideoListComponent.prototype.paginateVideos = function () {
        var initial = this.page * +this.take, final = initial + +this.take, newVideos = this.videos.slice(initial, final);
        (_a = this.videosPaginated).push.apply(_a, newVideos);
        this.noContent = !newVideos.length || newVideos.length < this.take;
        this.page++;
        var _a;
    };
    VideoListComponent.prototype.selectVideo = function (event, video) {
        event.preventDefault();
        this.youtube.starredVideo = video;
    };
    return VideoListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], VideoListComponent.prototype, "videos", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], VideoListComponent.prototype, "take", void 0);
VideoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-video-list',
        template: __webpack_require__(166),
        styles: [__webpack_require__(161)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])('youtube')), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])('ficticia')),
    __metadata("design:paramtypes", [Object, Object])
], VideoListComponent);

//# sourceMappingURL=video-list.component.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.bundle.js.map