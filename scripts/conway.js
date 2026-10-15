const visualizer = document.getElementById('visualizer');
const progressBar = document.getElementById('progess-bar');
const errorMessage = document.getElementById('error-message');

let digits = ['1'];

function createRow() {
    const row = document.createElement('div');
    const track = document.createElement('div');
    const sequence = document.createElement('span');
    track.className = 'sequence-track';
    track.setAttribute('role', 'region');
    track.setAttribute('aria-label', `Term ${visualizer.childElementCount + 1}`);
    sequence.className = 'sequence';
    track.appendChild(sequence);
    row.appendChild(track);
    visualizer.appendChild(row);
    return sequence;
}

function appendDigit(sequence, digit) {
    const span = document.createElement('span');
    span.className = `digit digit-${digit}`;
    span.textContent = String(digit);
    sequence.appendChild(span);
}

async function conway(sequence, groups) {
    const parts = [];

    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        const count = group.length;
        const digit = group[0];
        parts.push(String(count), digit);

        appendDigit(sequence, count);
        updateProgressBar(2 * i + 1, 2 * groups.length);
        await sleep(75);

        appendDigit(sequence, digit);
        updateProgressBar(2 * i + 2, 2 * groups.length);
        await sleep(75);
    }

    const nextGroups = parts.join('').match(/(.)\1*/g);
    if (nextGroups === null) {
        throw new Error('The calculation produced an empty term.');
    }
    return nextGroups;
}

async function loop() {
    appendDigit(createRow(), '1');

    while (true) {
        const sequence = createRow();
        updateProgressBar(0, 1);
        digits = await conway(sequence, digits);
        await sleep(150);
    }
}

function updateProgressBar(value, max) {
    const percent = (value / max) * 100;
    progressBar.style.width = `${percent}%`;
    progressBar.setAttribute('aria-valuenow', String(percent));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

void loop().catch((error) => {
    console.error('Error while generating the Conway sequence:', error);
    errorMessage.textContent = 'Generation stopped. Check the console for details.';
    errorMessage.hidden = false;
});
