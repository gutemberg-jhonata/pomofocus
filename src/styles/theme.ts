const root = document.documentElement;
const icon = document.querySelector('link[rel="shortcut icon"]');
const icon32x32 = document.querySelector('link[rel="shortcut icon"][sizes="32x32"]');
const icon16x16 = document.querySelector('link[rel="shortcut icon"][sizes="16x16"]');

const themes = {
    'pomodoro': {
        color: 'rgb(217, 85, 80)',
        iconType: ''
    },
    'short-break': {
        color: 'rgb(76, 145, 149)',
        iconType: '-green'
    },
    'long-break': {
        color: 'rgb(69, 124, 163)',
        iconType: '-blue'
    },
}

export function changeTheme(theme) {
    const { color, iconType } = themes[theme];
    const href = `/favicon${iconType}.ico`;

    root.style.setProperty('--main-color', color);
    icon.setAttribute('href', href);
    icon32x32.setAttribute('href', href);
    icon16x16.setAttribute('href', href);
}