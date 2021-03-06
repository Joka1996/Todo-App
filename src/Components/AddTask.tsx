import React, { ChangeEvent, FormEvent, useState } from "react";
import { AddTodo } from "../types";

interface AddTaskProps {
  addTodo: AddTodo;
}

//component for adding a task
export const AddTask: React.FC<AddTaskProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  //get the value and place in state.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    //clear the form input
    setNewTodo("");
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add task
      </button>
    </form>
  );
};
