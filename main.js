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
        changeIcon(id);
    })
})

function cleanButtonsAtrributes() {
    buttons.forEach(button => {
        button.setAttribute('active', 'false');
    });
}

const root = document.documentElement;
const colors = {
    'pomodoro': 'rgb(217, 85, 80)',
    'short-break': 'rgb(76, 145, 149)',
    'long-break': 'rgb(69, 124, 163)',
}

function changeTheme(id) {
    const color = colors[id];
    root.style.setProperty('--main-color', color);
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

const icon = document.querySelector('link[rel="shortcut icon"]');
const icon32x32 = document.querySelector('link[rel="shortcut icon"][sizes="32x32"]');
const icon16x16 = document.querySelector('link[rel="shortcut icon"][sizes="16x16"]');
const iconTypes = {
    "pomodoro": "",
    "short-break": "-green",
    "long-break": "-blue"
}

function changeIcon(id) {
    const iconType = iconTypes[id];
    const href = `./public/favicon${iconType}.ico`;
    icon.setAttribute('href', href);
}