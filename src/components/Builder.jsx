import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addFormReducer } from "./reducers/data-slice";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import DynamicInput from "./DynamicInput";

const Builder = ({ setShowBuilder }) => {
  const dispatch = useDispatch();
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [data, setData] = useState([
    { text: "First Name" },
    { text: "Last Name" },
  ]);
  const handleDragStart = e => {
    console.log("Started");
  };

  const handleDragEnd = event => {
    const contains = data.find(item => item.text === event.target.innerText);
    if (contains && contains.length() > 0) return;

    setData([...data, { text: event.target.innerText }]);
  };
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
  const drop = e => {
    const copyListItems = [...data];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setData(copyListItems);
  };
  const removeHandler = i => {
    if (i === 0 || i === 1) return;
    const newData = [...data];
    newData.splice(i, 1);
    setData(newData);
  };
  const previewHandler = () => {
    if (data.length === 0) return;
    setShowBuilder(false);
    dispatch(addFormReducer(data));
  };

  return (
    <div>
      <div className="flex justify-between w-full border-b border-lightGrey py-4">
        <h1 className="text-2xl text-black">Onboarding Forms</h1>
        <div
          className="bg-primaryDark text-white text-sm rounded-md text-center px-2 py-4"
          onClick={previewHandler}
        >
          Preview Form
        </div>
      </div>
      <div className="flex w-full relative space-x-4">
        <div>
          <div className="flex justify-between w-[200px] my-2">
            <h3 className="text-xs">Question Type</h3>
            <h4 className="text-xs text-green-400">Add Question Type</h4>
          </div>
          <div className="max-h-[100%] overflow-scroll">
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="First Name"
            />
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="Last Name"
            />
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="Email Address"
            />
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="Password"
            />
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="Phone Number"
            />
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="House Address"
            />
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="Date"
            />
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="Text Area"
            />
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="State Of Origin"
            />
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="Nationality"
            />
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="File Upload"
            />
            <Draggable
              handleStart={handleDragStart}
              handleEnd={handleDragEnd}
              text="Profile Picture"
            />
          </div>
        </div>
        <div
          className="relative grid grid-cols-2 justify-center space-x-3 w-full"
          onDragOver={e => {
            e.preventDefault();
          }}
        >
          {data &&
            data?.map((item, index) => {
              return (
                <div
                  onDragStart={e => dragStart(e, index)}
                  onDragEnter={e => dragEnter(e, index)}
                  onDragEnd={drop}
                  key={index}
                  draggable
                  className="flex  relative p-2 h-[100px]"
                >
                  {" "}
                  <div className="flex flex-col flex-1 mr-3">
                    <label>{item.text}</label>
                    <DynamicInput inputType={item.text} />
                  </div>
                  <div
                    className="bg-lightGrey font-bold flex justify-center items-center text-xs text-white w-4 h-4 rounded-full text-center absolute right-0 top-1/2 -translate-y-[50%]"
                    onClick={() => removeHandler(index)}
                  >
                    X
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Builder;
