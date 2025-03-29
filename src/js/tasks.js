import { refs } from "./refs.js";
import { renderNote } from './render-tasks.js';
import { taskMarkup } from "./markup-tasks.js";
import { getFromLocal, addToLocal } from './local-storage-api.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export let userNotes = getFromLocal() || [];
export function addNewNote(event) {
    event.preventDefault();
    const note = {
        id: generateId(),
        title: refs.inputTitle.value.trim(),
        description: refs.inputDescr.value.trim(),
    }
    if (!note.title || !note.description) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter valid title and descr!',
            position: 'topCenter',
        })
        return
    }
    userNotes.push(note);
    addToLocal(userNotes);
    refs.form.reset();
    renderNote(userNotes, taskMarkup);
};

export function deleteNote(event) {
    if (event.target.tagName === "BUTTON") {
        const itemToDel = event.target.closest('li');
        userNotes = userNotes.filter(element => !(element.id === itemToDel.id));
        addToLocal(userNotes);
        renderNote(userNotes, taskMarkup);
    }
    return;
};

function generateId() {
    return '4xxx-yxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
