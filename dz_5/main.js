//1
function Task(proritet, description, taskday) {
  this.proritet = proritet;
  this.description = description;
  this.taskday = taskday;
}
console.log(1, "Learn JS", 30);
//2
var tasks = [  
 new Task("1", "Learn JS", "10"),
 new Task("5", "Learn React JS", "20"),
 new Task("10", "Learn Vue JS", "30"),
]
for (const task of tasks) {
  console.log(task);
}
//3
var tasks = [
  {proritet: '1', description: 'Learn JS', taskday: '10'},
  {proritet: '5', description: 'Learn React JS', taskday: '20'},
  {proritet: '10', description: 'Learn Vue JS', taskday: '30'},
]
var description = tasks.map(function(task) {
  return task.description;
});
console.log(description);
4
var newTask = tasks.filter(tasks => {
    return tasks.taskday > 10
});
console.log(newTask);
//5
var tResuce = tasks.reduce(function(max, current) {
  return current.prioritet > max.prioritet ? current : max;
})
console.log((tResuce));