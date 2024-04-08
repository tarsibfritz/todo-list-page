// Getting ID's
const addButton = document.getElementById('add-task-button');
const taskTextarea = document.getElementById('task-name');
const tasksContainer = document.getElementById('tasks-container')
const clearButton = document.getElementById('clear-tasks')

// Function add task
function addTask(){
    const taskText = taskTextarea.value.trim();

    if (taskText !== ''){
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.textContent = taskText;
    tasksContainer.appendChild(taskDiv);
    taskTextarea.value = '';
    }
}

// Button function
addButton.addEventListener('click', addTask);

// Enter function
taskTextarea.addEventListener('keypress', function(event){
    if (event.key === "Enter"){
        event.preventDefault(); // Prevent the "Enter" key from causing a line break in the textarea
        addTask();  // Call the function to add the task
    }
})

// Clear All function
function clearContainer(){
    tasksContainer.innerHTML = '';
}

clearButton.addEventListener('click', clearContainer)