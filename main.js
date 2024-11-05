const taskInput = document.getElementById('taskInput');
const addButton = document.getElementbyId('addButton');

let tasks = [];

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '' {
    console.log('Task to add:', taskText);
    taskInput.value = '';
  })
});

