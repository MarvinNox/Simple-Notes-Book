import { refs } from "./refs.js";

export function themeToggle() {
    const newTheme = refs.body.classList.contains(refs.KEY_darkTheme) ? 'light' : 'dark';
    applyTheme(newTheme);
};

function applyTheme(theme) {
    refs.body.classList.toggle(refs.KEY_darkTheme, theme === 'dark');
    localStorage.setItem(refs.LS_THEME, theme);
};

export function detectTheme() {
    const savedTheme = localStorage.getItem(refs.LS_THEME)
    if (savedTheme) {
        applyTheme(savedTheme)
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }
}