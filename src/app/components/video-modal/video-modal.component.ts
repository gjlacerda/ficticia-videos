import {Component, OnInit, Inject, Input} from '@angular/core';

@Component({
    selector: 'app-video-modal',
    templateUrl: './video-modal.component.html',
    styleUrls: ['./video-modal.component.less']
})
export class VideoModalComponent implements OnInit {

    @Input() toggle;

    private readonly modalOpenClass = 'modal-opened';

    $body         = document.body;
    $playerIframe = null;

    // Remove esse evento ao destruir o componente
    eventListenerRemovable;


    constructor(@Inject('youtube') public youtube) {
        this.registerEvents();
    }

    /**
     * Remove a classe css do modal no body para fechá-lo
     */
    closeModal() {
        this.stopVideo();
        this.$body.classList.remove(this.modalOpenClass)
    }

    /**
     * Adiciona a classe css do modal no body para abrir
     */
    openModal() {
        this.$body.classList.add(this.modalOpenClass);
    }

    /**
     * Para o vídeo removendo seu src
     */
    private stopVideo() {
        this.$playerIframe = this.$playerIframe || document.querySelector('.player-iframe');
        this.$playerIframe.removeAttribute('src');
    }

    /**
     * Eventos DOM
     */
    private registerEvents() {

        this.eventListenerRemovable = evt => this.shouldOpenModal(evt);

        // Quando clicar no body verifica se clicou no elemento passado por Input. Se positivo, abre o modal
        this.$body.addEventListener('click', this.eventListenerRemovable);
    }

    private shouldOpenModal(event) {

        if (event.target['className'] === this.toggle) {
            this.openModal();
        }
    }

    ngOnDestroy() {
        this.$body.removeEventListener('click', this.eventListenerRemovable);
    }
    
    ngOnInit() {

    }

}
