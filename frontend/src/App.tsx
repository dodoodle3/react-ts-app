import React, { useState } from "react";

import Title from "./compornents/Title";
import Form from "./compornents/Form";
import List from "./compornents/List";
import "./App.css";

export type TodoType = {
  id: number;
  text: string;
  status: boolean;
};

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([
    { id: 1, text: "homework", status: false },
  ]);

  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      { id: todoList.length + 1, text: text, status: false },
    ]);
  };

  const deleteTodo = (id: number) => {
    const newArray: TodoType[] = todoList.reduce(
      (acc: TodoType[], cur: TodoType) => {
        if (cur.id == id) {
          return [...acc];
        }
        return [...acc, cur];
      },
      []
    );
    setTodoList(newArray);
  };

  const changeStatus = (id: number) => {
    const newArray: TodoType[] = todoList.reduce(
      (acc: TodoType[], cur: TodoType) => {
        if (cur.id == id) {
          cur.status = !cur.status;
        }
        return [...acc, cur];
      },
      []
    );
    setTodoList(newArray);
  };

  return (
    <div className="App">
      <Title />
      <Form addTodo={addTodo} />
      <List
        todoList={todoList}
        deleteTodo={deleteTodo}
        changeStatus={changeStatus}
      />
    </div>
  );
};

export default App;
