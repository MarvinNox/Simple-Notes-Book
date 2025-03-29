export const LS_KEY = 'userNotes';

export function addToLocal(obj) {
    localStorage.setItem(LS_KEY, JSON.stringify(obj));
}

export function getFromLocal() {
    if (localStorage.getItem(LS_KEY) === null) {
        return;
    }
    return JSON.parse(localStorage.getItem(LS_KEY));
}