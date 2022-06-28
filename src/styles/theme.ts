const root = document.documentElement;
const icon = 
document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement;
const icon32x32 = 
document.querySelector('link[rel="shortcut icon"][sizes="32x32"]') as HTMLLinkElement;
const icon16x16 = 
document.querySelector('link[rel="shortcut icon"][sizes="16x16"]') as HTMLLinkElement;

type Theme = 'pomodoro' | 'short-break' | 'long-break';

type ThemeProps = {
    'pomodoro': {
        color: string,
        iconType: string
    },
    'short-break': {
        color: string,
        iconType: string
    },
    'long-break': {
        color: string,
        iconType: string
    }
}

const themes: ThemeProps = {
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

export function changeTheme(theme: Theme) {
    const { color, iconType } = themes[theme];
    const href = `/favicon${iconType}.ico`;

    root.style.setProperty('--main-color', color);
    icon.setAttribute('href', href);
    icon32x32.setAttribute('href', href);
    icon16x16.setAttribute('href', href);
}