import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    private $searchInput   = null;
    private dropdownActive = false;
    private searchActive   = false;

    term = '';

    constructor(@Inject('youtube') private youtube, private router: Router) {
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
     * Fecha o dropdown ao clicar no Main caso esteja aberto
     */
    closeDropdown() {
        if (this.dropdownActive) {
            this.dropdownActive = false
        }
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

    /**
     * Faz a busca de acordo com o termo
     */
    submitSearch() {

        // Fecha o campo de busca
        this.toggleSearch();

        this.router.navigate(['/videos/search', this.term]);

        this.term = '';
    }
}
