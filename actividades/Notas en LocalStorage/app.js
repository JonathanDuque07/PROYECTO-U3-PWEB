const addNoteBtn = document.getElementById('add-note-btn');
const noteInput = document.getElementById('note-input');
const notesList = document.getElementById('notes-list');

// Función para guardar las notas en localStorage
function saveNotes() {
    const notes = [];
    document.querySelectorAll('#notes-list li p').forEach(note => {
        notes.push(note.textContent);
    });
    localStorage.setItem('notes', JSON.stringify(notes)); // Guardamos las notas en localStorage
}

// Función para cargar las notas desde el localStorage al iniciar la página
function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
        savedNotes.forEach(noteText => {
            const noteItem = document.createElement('li');
            const notePara = document.createElement('p');
            notePara.textContent = noteText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Eliminar";

            deleteBtn.addEventListener('click', () => {
                notesList.removeChild(noteItem);
                saveNotes(); // Guardamos las notas actualizadas después de eliminar
            });

            noteItem.appendChild(notePara);
            noteItem.appendChild(deleteBtn);
            notesList.appendChild(noteItem);
        });
    }
}

// Evento para agregar una nueva nota
addNoteBtn.addEventListener('click', () => {
    const noteText = noteInput.value.trim();

    if (noteText !== "") {
        const noteItem = document.createElement('li');
        const notePara = document.createElement('p');
        notePara.textContent = noteText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Eliminar";

        deleteBtn.addEventListener('click', () => {
            notesList.removeChild(noteItem);
            saveNotes(); // Guardamos las notas actualizadas después de eliminar
        });

        noteItem.appendChild(notePara);
        noteItem.appendChild(deleteBtn);
        notesList.appendChild(noteItem);

        noteInput.value = "";
        saveNotes(); // Guardamos las notas actualizadas
    }
});

// Cargar notas al iniciar la página
loadNotes();
