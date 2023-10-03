import React from "react";
type DeleteButtonProps = {
  id: number;
  deleteTodo: (id: number) => void;
};
const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  return <button onClick={() => props.deleteTodo(props.id)}>Delete</button>;
};

export default DeleteButton;
