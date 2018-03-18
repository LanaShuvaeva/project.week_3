// **************** Task 1 'TASKS' ****************
class Task {
  constructor(taskName, assignee){
    this.taskName = taskName;
    this.assignee = assignee;
  }
  render(taskName, assignee) {
    if (this.assignee !== undefined){
      return this.taskName + ' • ' + this.assignee;
    } else {
    return this.taskName;
   }
  }
}

// **************** Task 2 'LISTS' ****************

class List  {
  constructor(listName) {
    this.listName = listName;
    this.tasks = [];
  }

// Adds Task
    addTask (taskName) {
  this.tasks.push(taskName);
  return this;
}

// Removes Task
    removeTask (taskName) {
    for (let i in this.tasks) {
      if (this.tasks[i].taskName === taskName) {
        this.tasks.splice(i, 1);
        return this.tasks;
        }
      } return null;
    }

// List render
    render () {
      let breaks = '|--------------';
        console.log(`${breaks}\n| ${this.listName}\n${breaks}`);
      for (let i in this.tasks) {
        console.log(`| ${i}> ${this.tasks[i].render()}`);
      }
    }
  }

// **************** Task 3 'BOARD' ****************
  class Board  {
    constructor(boardName) {
      this.boardName = boardName;
      this.boards = [];
    }

// Board add list
      addList (listName) {
        this.boards.push(listName);
        return this;
      }

// Board remove list
      removeList (listName) {
        for (let i in this.boards) {
          if (this.boards[i].listName === listName) {
            this.boards.splice(i, 1);
            return this.boards;
            }
          } return null;
        }

// Board render
      render () {
        let breaks = '|--------------';
        let stars = '************';
          console.log(`${stars}\n* ${this.boardName} *\n${stars}`);
        for (let i in this.boards) {
          console.log(`| ${i}> ${this.boards[i].render()}\n|`);
    }
  }

// Board move task to
        moveTaskTo (taskName, fromList, toList) {
          for (let i in this.boards) {
            if (this.boards[i].listName === fromList) {
              this.boards[i].removeTask(taskName);
            } if (this.boards[i].listName === toList) {
              this.boards[i].addTask(new Task(taskName));
            }
          } return this;
        }
      }

//----------- Task 1 -----------
// const myTask = new Task('Clean dishes');
// const myTaskWithAssignee = new Task('Wash clothes', 'You');
//
// console.log(myTask.render()); // returns 'Clean Dishes'
// console.log(myTaskWithAssignee.render()); // returns 'Wash clothes • You'
//----------- Task 2 -----------
// const toDoList = new List('To Do');

// CHECK ADD TASK
// adds 'Laundry' task to 'To Do' list
// also works by chaining toDoList
// console.log(toDoList
//    .addTask(new Task('Laundry', 'You'))
//    .addTask(new Task('Buy Apples'))
//    .addTask(new Task('Pay Phone Bill', 'Me'))
//    .addTask(new Task('Remove Me!')));

// CHECK REMOVE TASK
// Finds and removes task named 'Remove Me!'
// console.log(toDoList.removeTask('Remove Me!'));

// CHECK RENDER LIST TASK
// console.log(toDoList.render());

//----------- Task 3 -----------
// CHECK ADD LIST TO THE BOARD TASK
const toDoList = new List('To Do')
  .addTask(new Task('Laundry', 'You'))
  .addTask(new Task('Buy Apples'))
  .addTask(new Task('Pay Phone Bill', 'Me'));

const doingList = new List('Doing')
  .addTask(new Task('Laundry'))
  .addTask(new Task('Study JavaScript', 'Jill'))
  .addTask(new Task('Study HTML', 'Jill'))
  .addTask(new Task('Study Ruby', 'Me'));

const doneList = new List('Done')
  .addTask(new Task('Laundry'))
  .addTask(new Task('Ruby Exercises Homework'));

const myBoard = new Board('My Board')
  .addList(toDoList)
  .addList(doingList)
  .addList(doneList);
// console.log(myBoard);

// CHECK REMOVE LIST FROM THE BOARD TASK
// console.log(myBoard.addList(new List('Remove Me!')));
//
// // Finds and removes the list named 'Remove Me!'
// console.log(myBoard.removeList('Remove Me!'));

// CHECK MY BOARD RENDER

console.log(myBoard.render());

// CHECK BOARD MOVE TASK TO
myBoard.moveTaskTo('Laundry', 'To Do', 'Doing');
myBoard.moveTaskTo('Buy Apples', 'To Do', 'Doing');
console.log(myBoard.render());
