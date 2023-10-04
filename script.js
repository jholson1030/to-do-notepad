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
        // Wrapper for the taskElement and deleteButton
        const taskWrapper = document.createElement('div');
        taskWrapper.className = 'task-wrapper';

        const taskElement = document.createElement('div');
        const deleteButton = document.createElement('button');
        taskElement.className = 'task'; // For styling purposes
        deleteButton.className = 'delete';
        taskElement.textContent = task;
        deleteButton.textContent = 'X';

        // Wrapping taskElement and deleteButton inside of taskWrapper
        taskElement.parentNode.insertBefore(taskWrapper, taskElement);
        deleteButton.parentNode.insertBefore(taskWrapper, deleteButton);

        // Append taskElement and deleteButton to taskWrapper
        taskWrapper.appendChild(taskElement);
        taskWrapper.appendChild(deleteButton);

        // Append the taskElement and deleteButton to the noteContainer
        noteContainer.appendChild(taskWrapper);
    });
}