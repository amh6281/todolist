const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value; // todoInput의 value를 비우지만 값을 저장
  todoInput.value = ""; // todoInput의 value를 비움
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
