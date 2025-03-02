"use strict";
class ToDoApp {
    constructor() {
        this.notes = [];
        this.modalOverlay = document.querySelector(".modal-overlay");
        this.noteList = document.querySelector(".notes-container");
        this.attachEventListeners();
    }
    attachEventListeners() {
        var _a, _b;
        (_a = document
            .querySelector(".add-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.showModal());
        (_b = document
            .querySelector(".cancel-button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => this.hideModal());
    }
    showModal() {
        var _a;
        (_a = this.modalOverlay) === null || _a === void 0 ? void 0 : _a.classList.add("show");
    }
    hideModal() {
        var _a;
        (_a = this.modalOverlay) === null || _a === void 0 ? void 0 : _a.classList.remove("show");
    }
    addNote(title, description) {
        if (!title.trim() || !description.trim())
            return;
        const newNote = {
            id: Date.now(),
            title,
            description,
            completed: false,
        };
        this.notes.push(newNote);
        this.renderNotes();
        this.hideModal();
    }
    editNote(id, title, description) {
        const note = this.notes.find((note) => note.id === id);
        if (note) {
            note.title = title;
            note.description = description;
            this.renderNotes();
        }
    }
    deleteNote(id) {
        this.notes = this.notes.filter((note) => note.id !== id);
        this.renderNotes();
    }
    toggleNoteCompletion(id) {
        const note = this.notes.find((note) => note.id === id);
        if (note) {
            note.completed = !note.completed;
            this.renderNotes();
        }
    }
    renderNotes() {
        if (!this.noteList)
            return;
        this.noteList.innerHTML = "";
        this.notes.forEach((note) => {
            var _a;
            const noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.innerHTML = `
        <h3 ${note.completed ? 'style="text-decoration: line-through;"' : ""}>${note.title}</h3>
        <p>${note.description}</p>
        <button onclick="app.toggleNoteCompletion(${note.id})">Done</button>
        <button onclick="app.editNotePrompt(${note.id})">Edit</button>
        <button onclick="app.deleteNote(${note.id})">Delete</button>
      `;
            (_a = this.noteList) === null || _a === void 0 ? void 0 : _a.appendChild(noteElement);
        });
    }
}
const app = new ToDoApp();
