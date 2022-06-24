import { changeTheme } from "./styles/theme.js";
import { startTimer, stopTimer, changeTimerMode } from "./timer.js";

// Navigation
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
        changeTimerMode(id);
    })
})

function cleanButtonsAtrributes() {
    buttons.forEach(button => {
        button.setAttribute('active', 'false');
    });
}

// Title
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

// Action Button
const actionButton = document.querySelector('button.action-button');
let isTimerStoped = false;
actionButton.addEventListener('click', () => {
    isTimerStoped = !isTimerStoped;
    actionButton.setAttribute('stop', isTimerStoped);
    actionButton.innerText = isTimerStoped ? "STOP" : "START";
    
    if (isTimerStoped) {
        startTimer();
    } else {
        stopTimer();
    }
})
