import { Egg } from './egg.min.js'

export class Miscellaneous 
{
    antSequence = "b,e,r,n,a,r,d,w,e,r,b,e,r";
    #egg;

    constructor() {
        this.#egg = new Egg();
    }

    ants() {
        let elm = '<div class="ant"></div>';
        document.querySelectorAll('[id^="digit-"]').forEach(function(e) {
            e.innerHTML = elm;
        });
    
        return () => elm;
    }

    addTrigger(seq, funct) {
        return this.#egg.addCode(seq, funct).listen();
    }
}