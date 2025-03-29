import { refs } from "./refs.js";

export function addToLocal(obj) {
    localStorage.setItem(refs.LS_KEY, JSON.stringify(obj));
}

export function getFromLocal() {
    if (localStorage.getItem(refs.LS_KEY) === null) {
        return;
    }
    return JSON.parse(localStorage.getItem(refs.LS_KEY));
}