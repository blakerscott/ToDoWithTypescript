/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

// var people = ToDoList.people;
//
// var tasks = [];
// tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
// tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
// tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
//
// tasks.push(new ToDoList.HobbyTask("Go to driving range."));
// tasks.push(new ToDoList.HobbyTask("Play guitar."));
//
// var today = new Date();
// var tomorrow = new Date();
// tomorrow.setDate(today.getDate() + 1);
// var nextDay = new Date();
// nextDay.setDate(today.getDate() + 2);

// tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
// tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
// tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
// tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
// tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

// console.log(tasks);
// var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
// console.log("Here are Thor's tasks: ");
// for (var task of thorTasks){
//   console.log(task);
// }

// $(document).ready(function(){
//   $('#taskButton').submit(function(event){
//   event.preventDefault();
//   $('#description').empty("");
//   $('#taskType').empty("");
//   $('#person').empty("");
//   $('#priority').empty("");
//   var type = $('#taskType').val();
//     if (type === "HomeTask") {
//     $('#description').show();
//     $('#priority').show();
//     $('#person').show();
//     $('#duedate').hide();
//   } else if (type === "HobbyTask") {
//     $('#description').show();
//     $('#priority').show();
//     $('#person').hide();
//     $('#duedate').hide();
//   } else if (type === "WorkTask") {
//     $('#description').show();
//     $('#priority').show();
//     $('#person').show();
//     $('#duedate').show();
//     }
// });
// })
$(document).ready(function(){
  $('#taskButton').click(function() {
    event.preventDefault();
    var type = $('#taskType').val();
    var description = $('#description').val();
    var person = $('#person').val();
    var priority = $('#priority').val();
    var dueDate = $('#dueDate').val();

    if (type === "HomeTask") {
      $('#homeTasks').append('<p>Description: ' + description + ', Priority: ' + priority + ', Person: ' + person + '</p>');
    } else if (type === "WorkTask") {
      $('#workTasks').append('<p>Description: ' + description + ', Priority: ' + priority + ', Person: ' + person + ', Due Date: ' + dueDate + '</p>');
    } else if (type === "HobbyTask") {
      $('#hobbyTasks').append('<p>Description: ' + description + ', Priority: ' + priority + '</p>');
    }

    console.log(type);
  });
});
