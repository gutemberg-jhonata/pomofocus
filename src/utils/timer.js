const timerMode = {
    'pomodoro': 25 * 60, // 25 minutos
    'short-break': 5 * 60, // 5 minutos
    'long-break': 15 * 60 // 15 minutos
}

const timerDisplay = document.querySelector('h1');
let timerCountInSeconds = timerMode.pomodoro;
let timerInterval;

export function startTimer() {
    timerInterval = setInterval(() => {
       timerCountInSeconds--;
       renderTimerDisplay(timerCountInSeconds);
    }, 1000)
}

function renderTimerDisplay() {
    const minutes = Math.floor(timerCountInSeconds / 60);
    const seconds = timerCountInSeconds % 60;

    const minutesString = String(minutes).padStart(2, '0');
    const secondsString = String(seconds).padStart(2, '0');

    timerDisplay.innerText = `${minutesString}:${secondsString}`;
}

export function stopTimer() {
    clearInterval(timerInterval);
}

export function changeTimerMode(key) {
    timerCountInSeconds = timerMode[key];
    stopTimer();
    renderTimerDisplay();
}
