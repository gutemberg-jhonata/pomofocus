import './styles/global.css';

import { 
    startTimer, 
    stopTimer, 
    changeTimerMode,
    isTimerRunning
} from "./utils/timer";

import { playClickButtonAudio } from './utils/audio';

type TimerModeProps = 'pomodoro' | 'short-break' | 'long-break';

// Navigation
const buttons = document.querySelectorAll<HTMLButtonElement>("nav button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const key = button.getAttribute('id');
        changeTimerMode(key as TimerModeProps);
    })
})

// Action Button
const actionButton = 
document.querySelector('button.action-button') as HTMLButtonElement;

actionButton.addEventListener('click', () => {
    if (isTimerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
    playClickButtonAudio();
})
