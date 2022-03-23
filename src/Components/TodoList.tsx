import React from "react";
import { Todo } from "../types";
import { ToggleTodo } from "../types";
import { TodoListItem } from "./TodoListItem";
import { Word } from "./Word";
import "../Css/Main.css";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}
//pass the interface
export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};
