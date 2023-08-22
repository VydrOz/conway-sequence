// elements
let prevVal = document.getElementById('prev-val');
let currVal = document.getElementById('curr-val');
let counter = document.getElementById('count');
let btnReset = document.getElementById('clear');

// variables
let digits = [3];
let nextDigits = "";

window.addEventListener('load', async () => {
    prevVal.innerHTML = digits[0];
    currVal.innerHTML = nextDigits;
    counter.innerHTML = 0;
    loop();
})

async function loop() {
    for (var i = 0; i < Infinity; i++) {
        await conway();
        counter.innerHTML = i;
    }
}

async function conway() {
    for (let i = 0; i < digits.length; i++) {
        await sleep(250);
        prevVal.innerHTML = digits.slice(0, i).join('')
            + '<span style="border: solid red 0.5px;">' + digits[i] + '</span>' +  digits.slice(i+1, digits.length).join('');
        await sleep(500);
        let num = digits[i].toString();
        let res = num.length + num[0];
        currVal.innerHTML = nextDigits + '<span style="border: solid red 0.5px;">' + res + '</span>';
        nextDigits += res;
    }

    digits = nextDigits.match(/(.)\1*/g).map(Number);
    nextDigits = "";
    prevVal.innerHTML = digits.join('');
    currVal.innerHTML = nextDigits;

    /*var conwayInterval = setInterval(() => {
        if(digits.length > i) {
            let num = digits[i].toString();
            let res = num.length + num[0];
            currVal.innerHTML += nextDigits + '<span style="color: red;">' + res + '</span>';
            nextDigits += res;
            if(digits.length < i++) {
                clearInterval(conwayInterval);
                callback();
            }
        }
    }, 2000);*/
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }