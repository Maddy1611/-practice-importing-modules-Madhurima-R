
const path = require("path");
const taskManager = require("./taskManager");
const fileHandler = require("./fileHandler");

//define the file path for tasks.json
const filePath = path.join(__dirname, "task.json");
//Load existing task
let tasks = fileHandler.loadTasks(filePath);
//Add a new task
taskManager.addTask(tasks, "wash dishes");
//list all tasks
taskManager.listTasks(tasks);
//save updated tasks
fileHandler.saveTasks(filePath, tasks);
