// Get references to HTML elements
var taskInput = document.getElementById('taskInput');
var addTaskButton = document.getElementById('addTask');
var taskList = document.getElementById('taskList');

// Add a click event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    // Get the text from the input field and remove any leading/trailing spaces
    var taskText = taskInput.value.trim();
    if (taskText === '') return;

    // Create a new list item (task) with a checkbox, task description, and delete button
    var li = document.createElement('li');
    li.innerHTML = '<input type="checkbox">' +
      '<span class="task">' + taskText + '</span>' +
      '<button class="delete">Delete</button>';

    // Add a click event listener to the delete button to remove the task
    var deleteButton = li.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    // Add the new task to the task list and clear the input field
    taskList.appendChild(li);
    taskInput.value = '';
}