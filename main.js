const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        cleanButtonsAtrributes();
        const button = e.target;
        button.setAttribute('active', 'true');
        const id = button.getAttribute('id');
        changeTheme(id);
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