import { changeTheme } from '../styles/theme';

type TimerModeProps = 'pomodoro' | 'short-break' | 'long-break';

const timerMode = {
    'pomodoro': 25 * 60, // 25 minutos
    'short-break': 5 * 60, // 5 minutos
    'long-break': 15 * 60 // 15 minutos
}

const timerDisplay = document.querySelector('h1');
const titleElement = document.querySelector('title');
const actionButton: HTMLButtonElement = 
document.querySelector('button.action-button');

let activeTimerMode = 'pomodoro';
let timerCountInSeconds: number = timerMode[activeTimerMode];
let timerInterval: number;
let focusCount = 0;

export let isTimerRunning = false;

export function startTimer() {
    isTimerRunning = true;

    actionButton.setAttribute('stop', String(isTimerRunning));
    actionButton.innerText = "STOP";

    timerInterval = setInterval(() => {
       timerCountInSeconds--;
       if (!timerCountInSeconds) {
           const nextTimerMode = findNextTimerMode();
           changeTimerMode(nextTimerMode);
       } else {
           renderTimerDisplay();
       }
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
    isTimerRunning = false;

    actionButton.setAttribute('stop', String(isTimerRunning));
    actionButton.innerText = "START";
    
    clearInterval(timerInterval);
}

export function changeTimerMode(key: TimerModeProps) {
    activeTimerMode = key;
    timerCountInSeconds = timerMode[key];

    clearTimerModeButtons();
    const timerModeButton = document.getElementById(key);
    timerModeButton.setAttribute('active', String(true));

    changeTheme(activeTimerMode);
    stopTimer();
    renderTimerDisplay();
}

function clearTimerModeButtons() {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(button => {
        button.setAttribute('active', String(false));
    });
}

function findNextTimerMode() {
    if (activeTimerMode === 'pomodoro') {
        focusCount++;
        
        if (focusCount > 3) {
            focusCount = 0;
            return 'long-break';
        }

        return 'short-break';
    }

    return 'pomodoro';
}