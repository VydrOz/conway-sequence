import { Egg } from './egg.min.js';

export class Miscellaneous {
    antSequence = 'b,e,r,n,a,r,d,w,e,r,b,e,r';
    #egg;

    constructor() {
        this.#egg = new Egg();
        this.addTrigger(this.antSequence, () => this.ants());
    }

    ants() {
        document.documentElement.dataset.display = 'ants';
    }

    addTrigger(sequence, callback) {
        return this.#egg.addCode(sequence, callback).listen();
    }
}

new Miscellaneous();
