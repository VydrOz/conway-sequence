import { Miscellaneous } from './miscellaneous.js'

// elements
let visualizer = document.getElementById('visualizer');
let progressBar = document.getElementById('progess-bar');

// variables
let misc = new Miscellaneous();
let digits = [1];
let nextDigits = "";
let l = (x) => x.length;
let f = (x) => x[0];

window.addEventListener('load', () => {
    let d = document.createElement("div");
    visualizer.appendChild(d);
    d.innerHTML = `<span id='digit-${digits[0]}'>${digits[0]}</span>`
    loop();
})

async function loop() {
    for (var i = 0; i < Infinity; i++) {
        let d = document.createElement("div");
        visualizer.appendChild(d);
        updateProgressBar(0, 1);
        await conway(d);
        digits = nextDigits.match(/(.)\1*/g).map(Number);
        nextDigits = "";
        await sleep(150);
    }
}

async function conway(elem) {
    for (let i = 0; i < digits.length; i++) {
        let num = digits[i].toString();
        nextDigits += num.length + num[0];
        elem.innerHTML += `<span id='digit-${num.length}'>${l(num)}</span>`;
        updateProgressBar(i-0.5, digits.length);
        await sleep(75);
        elem.innerHTML += `<span id='digit-${num[0]}'>${f(num)}</span>`
        updateProgressBar(i, digits.length);
        await sleep(75);
    }
    updateProgressBar(1, 1);
}

function updateProgressBar(val, max) {
    progressBar.style.width = `${(val/max)*100}%`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

misc.addTrigger(misc.antSequence, function() {
    if (l('x') === 1) {  l = f = misc.ants(); };
});