import { useState } from "react";

const Droppable = ({ onDrop }) => {
  const [placeholder, setPlaceholder] = useState("");

  const handleDragOver = e => {
    e.preventDefault();
  };

  return (
    <div onDrop={onDrop}>
      <div>{placeholder}</div>
      {placeholder && (
        <input type="text" placeholder={placeholder} className="bg-red-200" />
      )}
    </div>
  );
};

export default Droppable;
