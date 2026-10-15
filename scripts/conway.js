const root = document.documentElement;
const visualizer = document.getElementById('visualizer');
const progressBar = document.getElementById('progess-bar');
const zoomControl = document.getElementById('sequence-zoom');
const zoomValue = document.getElementById('zoom-value');
const zoomReset = document.getElementById('zoom-reset');
const generationSpeed = document.getElementById('generation-speed');
const speedValue = document.getElementById('speed-value');
const speedReset = document.getElementById('speed-reset');
const pauseGeneration = document.getElementById('pause-generation');
const displayMode = document.getElementById('display-mode');
const theme = document.getElementById('theme');
const errorMessage = document.getElementById('error-message');

const MIN_ZOOM = 25;
const MAX_ZOOM = 200;
let paused = false;
let resumeGeneration;
let digits = ['1'];

function setZoom(value) {
    const zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
    zoomControl.value = String(zoom);
    root.style.setProperty('--sequence-scale', String(zoom / 100));
    zoomValue.textContent = `${zoom}%`;
    zoomControl.setAttribute('aria-valuetext', `${zoom}%`);
}

zoomControl.addEventListener('input', () => setZoom(Number(zoomControl.value)));
zoomReset.addEventListener('click', () => setZoom(100));

function updateSpeed() {
    const speed = 2 ** Number(generationSpeed.value);
    speedValue.textContent = `×${speed}`;
    generationSpeed.setAttribute('aria-valuetext', `${speed}x${speed === 1 ? ' (Normal)' : ''}`);
}

generationSpeed.addEventListener('input', updateSpeed);
speedReset.addEventListener('click', () => {
    generationSpeed.value = '0';
    updateSpeed();
});

pauseGeneration.addEventListener('click', () => {
    paused = !paused;
    const label = paused ? 'Resume' : 'Pause';
    pauseGeneration.textContent = paused ? '▶' : '⏸';
    pauseGeneration.setAttribute('aria-label', label);
    pauseGeneration.title = label;
    pauseGeneration.setAttribute('aria-pressed', String(paused));
    if (!paused && resumeGeneration) {
        resumeGeneration();
        resumeGeneration = undefined;
    }
});

displayMode.addEventListener('change', () => {
    root.dataset.display = displayMode.querySelector('input:checked').value;
});

theme.addEventListener('change', () => {
    root.dataset.theme = theme.querySelector('input:checked').value;
});

const initialTheme = window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
theme.querySelector(`input[value="${initialTheme}"]`).checked = true;
root.dataset.theme = initialTheme;
root.dataset.display = displayMode.querySelector('input:checked').value;
setZoom(100);
generationSpeed.value = '0';
updateSpeed();

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

async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms / (2 ** Number(generationSpeed.value))));
    if (paused) {
        await new Promise(resolve => {
            resumeGeneration = resolve;
        });
    }
}

void loop().catch((error) => {
    console.error('Error while generating the Conway sequence:', error);
    errorMessage.textContent = 'Generation stopped. Check the console for details.';
    errorMessage.hidden = false;
    pauseGeneration.disabled = true;
});
