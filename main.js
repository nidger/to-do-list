// Get our DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskTemplate = document.getElementById('taskTemplate');

// Create our tasks array to store all tasks
let tasks = [];

function createTask() {
  // Get the task text from input
  const taskText = taskInput.value.trim();

  // Basic validation - check if input is not empty
  if (taskText !== '') {
   const task = {
     id: Date.now(), 
     text: taskText,
     status: 'todo' 
   };
      // Add task to array
      tasks.push(task);

      // Add to DOM
      addTask(task);
      
      // Clear the input field
      taskInput.value = '';
  }
};

//creating a task - running createTask function with click of button
addButton.addEventListener('click', function() {
createTask();
});

//creating a task - running createTask function with a press of the return key
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    createTask();
  }
});


//adding the task into the list

function addTask(task) {
  //Clone the template
  const taskElement = taskTemplate.content.cloneNode(true);

  //set the task list
  taskElement.querySelector('.task-text').textContent = task.text;

  //get all the buttons from the cloned element
  const startButton = taskElement.querySelector('.start-btn');
  const finishButton = taskElement.querySelector('.finish-btn');
  const deleteButton = taskElement.querySelector('.delete-btn');

  //add event listeners to the buttons
  startButton.addEventListener('click', function() {

      //find the task in our array and update its status
      const taskInArray = tasks.find(t => t.id === task.id);
      taskInArray.status = 'in-progress';


      //update visual appearance
      const listItem = this.closest('.task-item'); 
      listItem.classList.add('in-progress'); 

      //disable start button, enable finish button
      startButton.disabled = true;
      finishButton.disabled = false;
  });

  finishButton.addEventListener('click', function() {
      //find the task and update status
      const taskInArray = tasks.find(t => t.id === task.id);
      taskInArray.status = 'completed';

      //update visual appearance
      const listItem = this.closest('.task-item');
      listItem.classList.remove('in-progress');
      listItem.classList.add('completed');

      //disable both start and finish buttons
      startButton.disabled = true;
      finishButton.disabled = true;
  });

  deleteButton.addEventListener('click', function() { // Added delete button functionality
      //remove from tasks array
      tasks = tasks.filter(t => t.id !== task.id);

      //remove from the DOM
      this.closest('.task-item').remove();
  });

  //initially disable finish button
  finishButton.disabled = true;

  //Add to list
  taskList.appendChild(taskElement);
}