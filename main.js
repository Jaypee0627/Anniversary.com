// Function to save notes to localStorage
function saveNotes() {
    const notes = document.getElementById('notes').value;
    localStorage.setItem('loveNotes', notes);
    alert('Notes saved!');
}

// Function to load notes from localStorage
function loadNotes() {
    const savedNotes = localStorage.getItem('loveNotes');
    if (savedNotes) {
        document.getElementById('notes').value = savedNotes;
    }

    const loveNotes = JSON.parse(localStorage.getItem('loveNotesArray')) || [];
    loveNotes.forEach(note => {
        displayNote(note);
    });

    const savedLoveText = localStorage.getItem('loveText');
    if (savedLoveText) {
        document.getElementById('love-text').value = savedLoveText;
    }
}

// Function to toggle the visibility of the all-photos section
function toggleAllPhotos() {
    const allPhotosDiv = document.getElementById('all-photos');
    if (allPhotosDiv.classList.contains('hidden')) {
        allPhotosDiv.classList.remove('hidden');
    } else {
        allPhotosDiv.classList.add('hidden');
    }
}

// Function to add a new love note
function addNote() {
    const newNote = document.getElementById('new-note').value;
    if (newNote) {
        displayNote(newNote);

        const loveNotes = JSON.parse(localStorage.getItem('loveNotesArray')) || [];
        loveNotes.push(newNote);
        localStorage.setItem('loveNotesArray', JSON.stringify(loveNotes));

        document.getElementById('new-note').value = '';  // Clear the textarea
    }
}

// Function to display a note
function displayNote(note) {
    const notesContainer = document.getElementById('love-notes-container');
    const noteDiv = document.createElement('div');
    noteDiv.className = 'love-note';
    noteDiv.textContent = note;
    notesContainer.appendChild(noteDiv);
}

// Function to save the love letter to localStorage
function saveLoveText() {
    const loveText = document.getElementById('love-text').value;
    localStorage.setItem('loveText', loveText);
    alert('Love letter saved!');
}

// Load notes when the page loads
window.onload = loadNotes;