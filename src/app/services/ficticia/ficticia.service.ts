import {Injectable} from '@angular/core';

@Injectable()
export class FicticiaService {

    constructor() {
    }

    /**
     * Formata a data para 00/00/0000
     * @param date
     * @returns {string}
     */
    formatDateBr(date) {
        return new Date(date).toLocaleString('pt-br').split(' ')[0];
    }

    /**
     * Formata o número para 1k+
     * @param number
     */
    formatNumber(number) {

        if (!number) {
            return;
        }

        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}
