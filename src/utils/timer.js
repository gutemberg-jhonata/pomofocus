const timerMode = {
    'pomodoro': 25 * 60, // 25 minutos
    'short-break': 5 * 60, // 5 minutos
    'long-break': 15 * 60 // 15 minutos
}

const timerDisplay = document.querySelector('h1');
const titleElement = document.querySelector('title');
let activeTimerMode = 'pomodoro';
let timerCountInSeconds = timerMode[activeTimerMode];
let timerInterval;

export function startTimer() {
    timerInterval = setInterval(() => {
       timerCountInSeconds--;
       renderTimerDisplay();
    }, 1000)
}

function renderTimerDisplay() {
    const minutes = Math.floor(timerCountInSeconds / 60);
    const seconds = timerCountInSeconds % 60;

    const minutesString = String(minutes).padStart(2, '0');
    const secondsString = String(seconds).padStart(2, '0');
    const displayString = `${minutesString}:${secondsString}`;

    timerDisplay.innerText = displayString;

    if (activeTimerMode === 'pomodoro') {
        titleElement.innerText = `${displayString} - Time to focus!`;
    } else {
        titleElement.innerText = `${displayString} - Time to break!`;
    }
}

export function stopTimer() {
    clearInterval(timerInterval);
}

export function changeTimerMode(key) {
    activeTimerMode = key;
    timerCountInSeconds = timerMode[key];
    stopTimer();
    renderTimerDisplay();
}
