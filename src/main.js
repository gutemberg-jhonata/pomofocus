import { 
    startTimer, 
    stopTimer, 
    changeTimerMode,
    isTimerRunning
} from "./utils/timer.js";

// Navigation
const buttons = document.querySelectorAll("nav button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const key = button.getAttribute('id');
        changeTimerMode(key);
    })
})

// Action Button
const actionButton = document.querySelector('button.action-button');
actionButton.addEventListener('click', () => {
    if (isTimerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
})
