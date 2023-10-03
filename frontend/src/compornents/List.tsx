import React, { useState } from "react";
import Todo from "./Todo";
import { TodoType } from "../App";

type ListProps = {
  todoList: Array<TodoType>;
  changeStatus: (id: number) => void;
  deleteTodo: (id: number) => void;
};
const List: React.FC<ListProps> = (props) => {
  return (
    <>
      {props.todoList.map((todo) => {
        return (
          <Todo
            todo={todo}
            deleteTodo={props.deleteTodo}
            changeStatus={props.changeStatus}
          />
        );
      })}
    </>
  );
};

export default List;
