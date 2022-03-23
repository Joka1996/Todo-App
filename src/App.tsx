import React, { useState } from "react";
import { Todo } from "./types";
import { ToggleTodo } from "./types";
import { AddTodo } from "./types";
import { TodoList } from "./Components/TodoList";
import { AddTask } from "./Components/AddTask";
import { Restart } from "./Components/Restart";

//Array for saving values
const TodoArray: Array<Todo> = [];

//FC = Functional component
const App: React.FC = () => {
  //pass the array to state
  const [todos, setTodos] = useState(TodoArray);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    //map the array todos=TodoArray
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  //Add new task
  const addTodo: AddTodo = (newTodo) => {
    // prevent empty tasks from beiing added
    newTodo.trim() !== "" &&
      // new tasks will be set to false, not done.
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div className="App">
      <h1>The TodoApp!</h1>
      <main>
        <React.Fragment>
          {/**Include the list */}
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          {/**include the add task-form */}
          <AddTask addTodo={addTodo} />

          <Restart />
        </React.Fragment>
      </main>
    </div>
  );
};

export default App;
