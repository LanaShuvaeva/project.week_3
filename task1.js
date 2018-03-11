class Task {
  constructor(taskName, assignee){
    this.taskName = taskName;
    this.assignee = assignee;
  }
  render(taskName, assignee) {
    if (this.assignee !== undefined){
      return this.taskName + ' ● ' + this.assignee;
    } else {
    return this.taskName;
   }
  }
}

const myTask = new Task('Clean dishes');
const myTaskWithAssignee = new Task('Wash clothes', 'You');

console.log(myTask.render()) // returns 'Clean Dishes'
console.log(myTaskWithAssignee.render()) // returns 'Wash clothes • You'
