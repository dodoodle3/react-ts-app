import React, { useState } from "react";
import { TodoType } from "../App";

type FormProps = {
  addTodo: (text: string) => void;
};

const Form: React.FC<FormProps> = (props) => {
  const [newTask, setNewTask] = useState("");

  const handleNewTask = (e: any) => {
    setNewTask(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newTask === "") return;
    props.addTodo(newTask);
  };

  return (
    <form>
      <input type="text" value={newTask} onChange={handleNewTask} />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default Form;
