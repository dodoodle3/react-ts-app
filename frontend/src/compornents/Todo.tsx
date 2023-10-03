import React from "react";
import { TodoType } from "../App";
import DeleteButton from "./DeleteButton";
import DoneButton from "./DoneButton";

type TodooProps = {
  todo: TodoType;
  deleteTodo: (id: number) => void;
  changeStatus: (id: number) => void;
};
const Todo: React.FC<TodooProps> = (props) => {
  return (
    <div>
      <span>
        {props.todo.id}.{props.todo.text}
      </span>
      {props.todo.status ? (
        <>
          <span>✅</span>
          <DeleteButton deleteTodo={props.deleteTodo} id={props.todo.id} />
        </>
      ) : (
        <>
          <DoneButton changeStatus={props.changeStatus} id={props.todo.id} />
          <DeleteButton deleteTodo={props.deleteTodo} id={props.todo.id} />
        </>
      )}
    </div>
  );
};

export default Todo;
