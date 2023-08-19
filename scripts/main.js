import { Conway } from "./conway.js";

const conway = new Conway();

// elements
let prevVal = document.getElementById('prev-val');
let currVal = document.getElementById('curr-val');
let btnCalcNext = document.getElementById('btn-calc-next');

window.addEventListener('load', () => {
    showSequence();
})

btnCalcNext.addEventListener('click', () => {
    if (conway.calcNext()) {
        showSequence();
    }
})

function showSequence() {
    prevVal.innerHTML = conway.previous;
    currVal.innerHTML = conway.current;
}