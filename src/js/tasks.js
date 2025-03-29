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
        const item = event.target.closest('li');
        userNotes = userNotes.filter(element => !(element.title === item.children[1].textContent));
        addToLocal(userNotes);
        renderNote(userNotes, taskMarkup);
    }
    return;
};