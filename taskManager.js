
// Define and export the following functions:


//  addTask(tasks, task): Adds a new task to the task list.
function addTask(tasks, task){
tasks.push(task);
console.log(`Task "${task}" added!`);
}

// listTasks(tasks): Logs all tasks to the console.
function listTasks(tasks) {
  console.log(tasks);
}

module.exports = {
    addTask,
    listTasks
};