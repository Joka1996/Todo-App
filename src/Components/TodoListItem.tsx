import React from "react";
import { Todo } from "../types";
import { ToggleTodo } from "../types";
import { Word } from "./Word";

import "../Css/Main.css";
//define props
interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

//pass the props to function
export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <div>
      <ul>
        {/**Apply the class complete if bool=true, else keep it undefined */}
        <li className={todo.complete ? "complete" : undefined}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => toggleTodo(todo)}
            ></input>
          </label>
          {todo.text}
        </li>
      </ul>
      {/** Positive message prints if task is completed */}
      <div className="message">{todo.complete ? <Word /> : null}</div>
      <hr></hr>
    </div>
  );
};
