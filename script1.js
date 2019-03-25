var newTask = document.getElementById("new-task");
var incompleteTasks = document.getElementById("incomplete-tasks");
var completedTasks = document.getElementById("completed-tasks");
var addButton = document.getElementsByTagName("button")[0]; // first button

// new Task List item

var createNewTaskElement = function (newTaskString) {
    // create List Item
    var listItem = document.createElement("li");
    // input checkbox
    var checkBox = document.createElement("input");
    // label
    var label = document.createElement("label");
    // button.delete
    var deleteButton = document.createElement("button");

    // each element needs modified 
    checkBox.type = "checkBox";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    return listItem;
};

//Add a new task

var addTask = function () {
    console.log("Add Task...");
    //Create a new list item with the text from the #new-task:
    var listItem = createNewTaskElement(taskInput.value);
    //Append listItem to incompleteTaskHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
};

//Delete an existing task

var deleteTask = function () {
    console.log("Delete Task...");
    //Remove the parent list item from the ul
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
};

//Mark a task as complete

var taskCompleted = function () {
    console.log("Task Complete...");
    //When the Checkbox is checked 
    //Append the task list item to the #completed-tasks ul
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
};

//Mark a task as incomplete

var taskIncomplete = function () {
    console.log("Task Incomplete...");
    //When the checkbox is unchecked appendTo #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};

//Set the click handler to the addTask function

addButton.addEventListener("click", addTask);

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    console.log("Bind List item events");
    // select listitems chidlren
    var checkBox = taskListItem.querySelector('input[type="checkbox"]');
    var deleteButton = taskListItem.querySelector("button.delete");
    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
};

//cycle over incompleteTaskHolder ul list items

for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
    //bind events to list item's children (taskCompleted)	
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTaskHolder ul list items

for (var i = 0; i < completedTasksHolder.children.length; i++) {
    //bind events to list item's children (taskCompleted)	
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}