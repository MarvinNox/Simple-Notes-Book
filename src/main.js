import { renderNote } from './js/render-tasks.js';
import { taskMarkup } from "./js/markup-tasks.js";
import { getFromLocal } from './js/local-storage-api.js'
import { addNewNote, deleteNote } from "./js/tasks.js"
import { refs } from './js/refs.js';

export let userNotes = getFromLocal() || [];

refs.form.addEventListener('submit', addNewNote);
refs.taskList.addEventListener('click', deleteNote);

renderNote(userNotes, taskMarkup);


