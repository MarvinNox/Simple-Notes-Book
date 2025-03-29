import { refs } from './refs';

export function renderNote(obj, taskMarkup) {
    refs.taskList.innerHTML = '';
    refs.taskList.insertAdjacentHTML('beforeend', taskMarkup(obj));
}