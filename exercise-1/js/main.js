// Main.js
$(function() {
    // Setup: Initialize Firebase using the configuration of your project
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyD5lbmt5oexGHvCQmF93JDbmEOEzVx7NPg",
      authDomain: "m12-e1.firebaseapp.com",
      databaseURL: "https://m12-e1.firebaseio.com",
      storageBucket: "m12-e1.appspot.com",
      messagingSenderId: "125942661860"
    };
    firebase.initializeApp(config);

    // Reading Data: Create new database reference 'todos'
    var todos = firebase.database().ref('todos');

    // Reading Data:
    // Set listener: on change, empty the todo list, and iterate through to make a new list
    todos.on('value', function(snapshot) {
      // empty
      $('#todo-list').empty();

      // now iterate
      var items = snapshot.val();
      if (items !== null) {
        Object.keys(items).forEach(function(key) {
          renderTodo(key, items[key]);
        });
      }
    });


    // Rendering Data: Function to make todos
    var renderTodo = function(id, content) {

        // Create new todo <div> with classes 'todo', and the priority of the item
        var newTodo = $('<div>').attr('class', 'todo ' + content.priority);

        // Create an <h5> element, set it's text to the description, and class as the status
        var text = $('<h5>').text(content.description).attr('class', content.status);
        newTodo.append(text);

        // Update Data: create a check icon with click event
        var completeIcon = $('<i>').attr('class', "fa fa-check fa-2x " + content.status);
        completeIcon.on('click', function() {
          // Flip the status on click
          var status = content.status == 'complete' ? 'incomplete' : 'complete';

          // Set the child values of the item
          todos.child(id).set({
            description: content.description;
            priority: content.priority;
            status: status;
          });
        });

        // Deleting data: Delete icon: on click, remove the reference
        var deleteIcon = $('<i>').attr('class', "fa fa-times fa-2x");
        deleteIcon.on('click', function() {
          todos.child(id).remove();
        });

        // Update/Delete data: append the icons to the newTodo item
        newTodo.append(completeIcon).append(deleteIcon);

        // Append newTodo item to item with id #todo-list
        $('todo-list').append(newTodo);
    };

    // Reading Data: Form submission
    $('form').on('submit', function(event) {
        event.preventDefault();

        // Get values
        var priority = $(this).find('input:checked')[0].id;
        var text = $(this).find('input').val();

        // Reading Data: Push new item into `todos` reference
        todos.push({
          description: text, // 'text' is retrieved from the form
          priority: priority, // 'priority' is retrieved from the form
          status: 'incomplete' // by default, items should be incomplete
        });

        // Reset the form
        this.reset();
    });
});
