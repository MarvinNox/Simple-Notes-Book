import { refs } from './js/refs.js';
import { renderNote } from './js/render-tasks.js';
import { taskMarkup } from "./js/markup-tasks.js";
import { addNewNote, deleteNote, userNotes } from "./js/tasks.js"
import { themeToggle, detectTheme } from './js/theme-switcher.js';

detectTheme();

refs.form.addEventListener('submit', addNewNote);
refs.taskList.addEventListener('click', deleteNote);
refs.themeToggleBttn.addEventListener('click', themeToggle);

renderNote(userNotes, taskMarkup);


