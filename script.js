console.log("script running...");
// Add event listeners for buttons
document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
document.getElementById('change-bg-btn').addEventListener('click', changeBackground);

function addTask() {
    // Get input values
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    const priorityInput = document.getElementById('priority-input');
    const priorityValue = priorityInput.value;

    const dueDateInput = document.getElementById('due-date-input');
    const dueDateValue = dueDateInput.value;

    const categoryInput = document.getElementById('category-input');
    const categoryValue = categoryInput.value;

    // Validate task input
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item for the task
    const listItem = document.createElement('li');
    // Add a class based on priority for styling
    listItem.classList.add(priorityValue.toLowerCase());

    // Set the inner HTML with task details and two buttons: Complete and Remove
    listItem.innerHTML = `
    <span>
      <strong>Task:</strong> ${taskValue} | 
      <strong>Priority:</strong> ${priorityValue} | 
      <strong>Due:</strong> ${dueDateValue ? dueDateValue : "No due date"} | 
      <strong>Category:</strong> ${categoryValue}
    </span>
    <div>
      <button class="complete-btn" onclick="completeTask(this)">Complete</button>
      <button class="remove-btn" onclick="removeTask(this)">Remove</button>
    </div>
  `;

    // Append the new task to the task list
    document.getElementById('task-list').appendChild(listItem);
    console.log("updated task-list");
    
    // Clear the input fields
    taskInput.value = "";
    dueDateInput.value = "";
}

function removeTask(button) {
    const listItem = button.parentElement.parentElement;
    console.log("removed ", listItem);
    listItem.remove();
}

function completeTask(button) {
    const listItem = button.parentElement.parentElement;
    // Toggle the completed state on the task
    listItem.classList.toggle('completed');
    console.log("completed class toggled!");
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    console.log("dark-mode class toggled!");
}

function changeBackground() {
    const fileInput = document.getElementById('bg-image-upload');
    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
        }

        reader.readAsDataURL(file);
    } else {
        alert("Please select an image file!");
    }
}