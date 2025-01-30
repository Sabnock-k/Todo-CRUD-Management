let todos = []

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function renderTools(){
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = '<span>${todo}</span> <button onlick="editTodo(${index})">Edit</button> <button onlick="deleteTodo(${index})">Delete</button>';
        todoList.appendChild(li);
    });
}

function addTodo(event){
    event.preventDefault
}