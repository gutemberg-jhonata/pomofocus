import { changeTheme } from "./styles/theme.js";
import { 
    startTimer, 
    stopTimer, 
    changeTimerMode,
    isTimerRunning
} from "./utils/timer.js";

// Navigation
const buttons = document.querySelectorAll("nav button");
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Altera seleção
        cleanButtonsAtrributes();
        const button = e.target;
        button.setAttribute('active', true);

        const id = button.getAttribute('id');
        changeTheme(id);
        changeTimerMode(id);
    })
})

function cleanButtonsAtrributes() {
    buttons.forEach(button => {
        button.setAttribute('active', false);
    });
}

// Action Button
const actionButton = document.querySelector('button.action-button');
actionButton.addEventListener('click', () => {
    if (isTimerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
})
