import { changeTheme } from "./styles/theme.js";

const buttons = document.querySelectorAll("nav button");

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Altera seleção
        cleanButtonsAtrributes();
        const button = e.target;
        button.setAttribute('active', 'true');

        const id = button.getAttribute('id');
        changeTheme(id);
        changeTitle(id);
        
        timerCountInSeconds = timerType[id];
        renderTimerDisplay();
    })
})

function cleanButtonsAtrributes() {
    buttons.forEach(button => {
        button.setAttribute('active', 'false');
    });
}

const titleElement = document.querySelector('title');
const titles = {
    'pomodoro': '25:00 - Time to focus!',
    'short-break': '05:00 - Time for break!',
    'long-break': '15:00 - Time for break!'
}

function changeTitle(id) {
    const title = titles[id];
    titleElement.innerHTML = title;
}

const timerType = {
    'pomodoro': 25 * 60,
    'short-break': 5 * 60,
    'long-break': 15 * 60
}

const actionButton = document.querySelector('button.action-button');
let isTimerStoped = false;
actionButton.addEventListener('click', () => {
    isTimerStoped = !isTimerStoped;
    handleTimer(isTimerStoped);
    startTimer();
})

function handleTimer(isTimerStoped) {
    actionButton.setAttribute('stop', isTimerStoped);
    actionButton.innerText = isTimerStoped ? "STOP" : "START";
}

// Timer
const timerDisplay = document.querySelector('h1');
let timerCountInSeconds;

function renderTimerDisplay() {
    const minutes = Math.floor(timerCountInSeconds / 60);
    const seconds = timerCountInSeconds % 60;

    const minutesString = String(minutes).padStart(2, '0');
    const secondsString = String(seconds).padStart(2, '0');

    timerDisplay.innerText = `${minutesString}:${secondsString}`;
}

function startTimer() {
    setInterval(() => {
       timerCountInSeconds--;
       renderTimerDisplay(timerCountInSeconds);
    }, 1000)
}