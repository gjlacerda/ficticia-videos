import {Component, Inject} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    $searchInput   = null;
    dropdownActive = false;
    searchActive   = false;

    constructor(@Inject('youtube') private youtube) {
        this.youtube.get();
    }

    /**
     * Retorna a classe css correta se estiver ativo a barra de pesquisa
     * @returns {{active: boolean}}
     */
    get cssSearch() {
        return {
            'header-search': this.searchActive
        };
    }

    get cssDropdown() {
        return {
            'active' : this.dropdownActive
        };
    }

    /**
     * Abre/fecha o dropdown de links
     */
    toggleDropdown() {
        this.dropdownActive = !this.dropdownActive;
    }

    /**
     * Mostra esconde a barra de pesquisa
     */
    toggleSearch() {

        this.searchActive = !this.searchActive;

        // Adiciona o foco no campo se estiver ativo o a busca
        if (this.searchActive) {

            this.$searchInput = this.$searchInput || document.querySelector('.search-input');

            // O timeout é necessário para conseguir capturar o input
            setTimeout(() => {
                this.$searchInput.focus();
            });
        }
    }

}
