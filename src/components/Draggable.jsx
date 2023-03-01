import React from "react";

const Draggable = ({ text, handleStart, handleEnd }) => {
  return (
    <div
      draggable
      onDragStart={handleStart}
      onDragEnd={handleEnd}
      className="bg-lightGrey mb-1 p-2 rounded-sm"
    >
      {text}
    </div>
  );
};

export default Draggable;
