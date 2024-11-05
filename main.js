// Get our DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskTemplate = document.getElementById('taskTemplate');

// Create our tasks array to store all tasks
let tasks = [];

// Add event listener to the button
addButton.addEventListener('click', function() {
    // Get the task text from input
    const taskText = taskInput.value.trim();
    
    // Basic validation - check if input is not empty
    if (taskText !== '') {
      const task = {
        id: Date.now(), //unique identifier
        text: taskText,
        status: 'todo' //inital status
      };
        // Add task to array
        tasks.push(task);
        // Add to DOM
        addTask(task);
        
        // Clear the input field
        taskInput.value = '';
    }
});

function addTask(task) {
  //Clone the template
  const taskElement = taskTemplate.content.cloneNode(true);

  //set the task list
  taskElement.querySelector('.task-text').textContent = task.text;

  //Add to list
  taskList.appendChild(taskElement);
}