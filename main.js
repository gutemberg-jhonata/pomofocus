import { changeTheme } from "./src/styles/theme.js";

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Altera seleção
        cleanButtonsAtrributes();
        const button = e.target;
        button.setAttribute('active', 'true');

        const id = button.getAttribute('id');
        changeTheme(id);
        changeTitle(id);
        changeTimer(id);
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

const timerText = document.querySelector('h1');
const timerType = {
    'pomodoro': '25:00',
    'short-break': '05:00',
    'long-break': '15:00'
}

function changeTimer(id) {
    timerText.innerText = timerType[id];
}
