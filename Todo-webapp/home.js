const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const addBtn = document.querySelector(".add-btn");
const notesContainer = document.querySelector(".notes");

let todos = [];
let nextId = 1;

function renderTodos() {
  notesContainer.innerHTML = "";
  todos.forEach((todo) => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
            <div class="top">
                <h1 class="title">${todo.title}</h1>
                <i class="fa-solid fa-ellipsis menu-icon"></i>
                <div class="dialog-box" id="dialog-box">
                    <button class="edit-btn" data-id="${
                      todo.id
                    }">Edit ...</button>
                    <button class="delete-btn" data-id="${
                      todo.id
                    }">Delete</button>
                </div>
            </div>
            <div class="description">
                <p>${todo.description}</p>
            </div>
            <div class="bottom">
                <div class="done">
                    <input type="checkbox" class="check-done-task" data-id="${
                      todo.id
                    }" ${todo.completed ? "checked" : ""}/>
                    <label>Done</label>
                </div>
            </div>
        `;
    notesContainer.appendChild(note);
  });
  addEventListeners();
}

function addTodo(title, description) {
  if (!title.trim() && !description.trim()) return;
  todos.push({
    id: nextId++,
    title: title,
    description: description,
    completed: false,
  });
  renderTodos();
}

function completeTodo(id) {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
  renderTodos();
}

function removeTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function addEventListeners() {
  openModalBtn.addEventListener("click", () => {
    modalOverlay.classList.add("show");
    titleInput.value = "";
    descriptionInput.value = "";
    addBtn.dataset.editId = "";
  });

  closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("show");
  });

  addBtn.addEventListener("click", () => {
    addTodo(titleInput.value, descriptionInput.value);
    modalOverlay.classList.remove("show");
  });

  document.querySelectorAll(".check-done-task").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      completeTodo(parseInt(event.target.dataset.id));
    });
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (confirm("Are you sure?")) {
        removeTodo(parseInt(event.target.dataset.id));
      }
    });
  });

  document.querySelectorAll(".menu-icon").forEach((icon) => {
    icon.addEventListener("click", (event) => {
      const dialogBox = event.target.nextElementSibling;
      dialogBox.classList.toggle("active");
    });
  });
}

renderTodos(); // Initial render
