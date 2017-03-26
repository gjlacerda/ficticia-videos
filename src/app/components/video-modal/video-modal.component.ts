import {Component, OnInit, Inject, Input} from '@angular/core';

@Component({
    selector: 'app-video-modal',
    templateUrl: './video-modal.component.html',
    styleUrls: ['./video-modal.component.less']
})
export class VideoModalComponent implements OnInit {

    @Input() toggle;

    private readonly modalOpenClass = 'modal-opened';

    $body = document.body;

    constructor(@Inject('youtube') private youtube) {
        this.registerEvents();
    }

    /**
     * Remove a classe css do modal no body para fechá-lo
     */
    closeModal() {
        this.$body.classList.remove(this.modalOpenClass)
    }

    /**
     * Adiciona a classe css do modal no body para abrir
     */
    openModal() {
        this.$body.classList.add(this.modalOpenClass);
    }

    /**
     * Eventos DOM
     */
    registerEvents() {

        // Quando clicar no body verifica se clicou no elemento passado por Input. Se positivo, abre o modal
        this.$body.addEventListener('click', event => {
            if (event.target['className'] === this.toggle) {
                this.openModal();
            }
        });
    }

    ngOnInit() {

    }

}
