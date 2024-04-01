// Getting ID's
const addButton = document.getElementById('add-task-button');
const taskTextarea = document.getElementById('task-name');
const tasksContainer = document.getElementById('tasks-container')

// Add button function
addButton.addEventListener('click', function(){
    const taskText = taskTextarea.value.trim();

   if (taskText !== ''){
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.textContent = taskText;
    tasksContainer.appendChild(taskDiv);
    taskTextarea.value = '';
   } 
}
)