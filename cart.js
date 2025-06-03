// const addBtn = document.querySelector(".add");
// const removeBtn = document.querySelector(".remove");
// let count = 0;

// addBtn.addEventListener("click", function() {
//     count++;
//     document.querySelector(".count").textContent = count;
// });

  
// removeBtn.addEventListener("click", function() {
//       if (count >= 1) {
//     count--;
//     document.querySelector(".count").textContent = count;
//       }
// });

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const task = {
    text: taskText,
    completed: false
  };

  saveTask(task);
  input.value = "";
  renderTasks();
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <span onclick="toggleComplete(${index})">${task.text}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

function toggleComplete(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
