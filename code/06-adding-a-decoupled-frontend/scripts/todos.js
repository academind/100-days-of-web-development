const todoFormElement = document.querySelector('#todo-management form');
const todosListElement = document.getElementById('todos-list');

let editedTodoElement;

async function loadTodos() {
  let response;
  try {
    response = await fetch('http://localhost:3000/todos');
  } catch (error) {
    alert('Something went wrong!');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }

  const responseData = await response.json();
  const todos = responseData.todos;

  for (const todo of todos) {
    createTodoListItem(todo.text, todo.id);
  }
}

function createTodoListItem(todoText, todoId) {
  const newTodoItemElement = document.createElement('li');
  newTodoItemElement.dataset.todoid = todoId; // data-todoid

  const todoTextElement = document.createElement('p');
  todoTextElement.textContent = todoText;

  const editTodoButtonElement = document.createElement('button');
  editTodoButtonElement.textContent = 'Edit';
  editTodoButtonElement.addEventListener('click', startTodoEditing);

  const deleteTodoButtonElement = document.createElement('button');
  deleteTodoButtonElement.textContent = 'Delete';
  deleteTodoButtonElement.addEventListener('click', deleteTodo);

  const todoActionsWrapperElement = document.createElement('div');
  todoActionsWrapperElement.appendChild(editTodoButtonElement);
  todoActionsWrapperElement.appendChild(deleteTodoButtonElement);

  newTodoItemElement.appendChild(todoTextElement);
  newTodoItemElement.appendChild(todoActionsWrapperElement);

  todosListElement.appendChild(newTodoItemElement);
}

async function createTodo(todoText) {
  let response;

  try {
    response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify({
        text: todoText,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    alert('Something went wrong!');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }

  const responseData = await response.json();
  const todoId = responseData.createdTodo.id;

  createTodoListItem(todoText, todoId);
}

async function updateTodo(newTodoText) {
  const todoId = editedTodoElement.dataset.todoid; // data-todoid
  let response;

  try {
    response = await fetch('http://localhost:3000/todos/' + todoId, {
      method: 'PATCH',
      body: JSON.stringify({
        newText: newTodoText,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    alert('Something went wrong!');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }

  editedTodoElement.firstElementChild.textContent = newTodoText;

  todoFormElement.querySelector('input').value = '';
  editedTodoElement = null;
}

async function deleteTodo(event) {
  const clickedButtonElement = event.target;
  const todoElement = clickedButtonElement.parentElement.parentElement;
  const todoId = todoElement.dataset.todoid;

  let response;

  try {
    response = await fetch('http://localhost:3000/todos/' + todoId, {
      method: 'DELETE',
    });
  } catch (error) {
    alert('Something went wrong!');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }

  todoElement.remove();
}

function saveTodo(event) {
  event.preventDefault();

  const formInput = new FormData(event.target);
  const enteredTodoText = formInput.get('text');

  if (!editedTodoElement) {
    // We're adding a new todo
    createTodo(enteredTodoText);
  } else {
    // We're updating an existing todo
    updateTodo(enteredTodoText);
  }
}

function startTodoEditing(event) {
  const clickedButtonElement = event.target;
  editedTodoElement = clickedButtonElement.parentElement.parentElement; // the <li>
  const currentText = editedTodoElement.firstElementChild.textContent;

  todoFormElement.querySelector('input').value = currentText;
}

todoFormElement.addEventListener('submit', saveTodo);

loadTodos();