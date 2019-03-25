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
}