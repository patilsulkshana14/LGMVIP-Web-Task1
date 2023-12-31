var taskInput = document.querySelector('.task-input');
var addButton = document.querySelector('.add-button');
var taskList = document.querySelector('.task-list');

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

function addTask() {
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var taskItem = document.createElement("li");
        taskItem.className = "task";

        var taskTextElement = document.createElement("span");
        taskTextElement.className = "task-text";
        taskTextElement.textContent = taskText;

        var actions = document.createElement("div");
        actions.className = "actions";

        var removeBtn = document.createElement("button");
        removeBtn.textContent = "Delete";
        removeBtn.title = "Remove";

        var doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.title = "Mark as Done";

        
        actions.appendChild(removeBtn);
        actions.appendChild(doneBtn);

        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(actions);

        taskList.appendChild(taskItem);

        taskInput.value = '';

        removeBtn.addEventListener("click", function() {
            removeTask(taskItem);
        });

        doneBtn.addEventListener("click", function() {
            markAsDone(taskItem);
        });
    }
}

function removeTask(taskItem) {
    taskItem.classList.add("slide-out");
    setTimeout(function() {
        taskItem.remove();
    }, 300);
}

function markAsDone(taskItem) {
    taskItem.classList.toggle("done");
}