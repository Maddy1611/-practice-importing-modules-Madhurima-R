

/*Use the fs (File System) built-in module to define and export the
following functions:*/

const fs = require('fs');

/*saveTasks(filePath, tasks): Writes the tasks to a file in JSON
format.*/

function saveTasks(filePath, tasks){
fs.writeFileSync(filePath, JSON.stringify(tasks));
console.log("Tasks saved!");
}

/*loadTasks(filePath): Reads and parses the tasks from the file.
If the file doesn’t exist, return an empty array.*/

function loadTasks(filePath) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } else {
    return [];
  }
}

module.exports = {saveTasks, loadTasks};
