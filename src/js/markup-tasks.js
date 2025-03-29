export function taskMarkup(notesArr) {
  return notesArr.map(({ id, title, description }) =>
    `<li class="task-list-item" id="${id}">
        <button class="task-list-item-btn">Delete</button>
        <h3>${title}</h3>
        <p>${description}</p>
      </li>`
  ).join("");
};
