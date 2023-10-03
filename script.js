// Set variables to all page elements

const noteContainer = document.getElementById('note-container');
const noteInput = document.getElementById('note-input');
const noteSubmit = document.getElementById('note-submit');

// Note array
let noteTasks = [];

// Listening for a button click
noteSubmit.addEventListener('click', function(event) {
    // Prevent the default behavior of the form submission
    event.preventDefault();

    // Grab value from the input
    const noteInputValue = noteInput.value.trim();

    // Checks if the input is not empty
    if (noteInputValue.length) {
        // Add the task to the task array
        noteTasks.push(noteInputValue);

        // Update the DOM
        updateNotes();

        // Clear the input field
        noteInput.value = '';
    }
});

function updateNotes() {
    // Clearing noteContainer first
    noteContainer.innerHTML = '';

    // Append each task to the noteContainer
    noteTasks.forEach(function (task) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task'; // For styling purposes
        taskElement.textContent = task;

        // Append the taskElement to the noteContainer
        noteContainer.appendChild(taskElement);
    });
}