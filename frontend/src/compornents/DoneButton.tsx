import React from "react";

type DoneButtonProps = {
  id: number;
  changeStatus: (id: number) => void;
};
const DoneButton: React.FC<DoneButtonProps> = (props) => {
  return <button onClick={() => props.changeStatus(props.id)}>Done</button>;
};

export default DoneButton;
