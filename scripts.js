alert("Start")
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', function() {
const todoInput = document.getElementById('to-do-input');
const todoValue = todoInput.value;
const todoList = document.getElementById('to-do-list');

const todoItem = document.createElement('li');
todoItem.textContent = todoValue;
todoList.appendChild(todoItem);
});

todoList.addEventListener('click', function(event) {
if (event.target.tagName === 'BUTTON') {
event.target.parentElement.remove();
}
});