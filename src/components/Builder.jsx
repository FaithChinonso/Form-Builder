import React, { useState, useRef } from "react";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

const Builder = ({ setShowBuilder }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [data, setData] = useState([]);
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
    const newData = [...data];

    newData.splice(i, 1);

    setData(newData);
  };
  const previewHandler = () => {
    setShowBuilder(false);
  };

  return (
    <div>
      <div className="flex justify-between w-full border-b border-lightGrey py-4">
        <h1 className="text-2xl text-black">Onboarding Forms</h1>
        <div
          className="bg-primaryDark text-white text-sm rounded-md text-center px-2 py-4"
          onClick={previewHandler}
        >
          Create Form
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
                    {item.text === "First Name" && (
                      <input
                        placeholder={item.text}
                        type="text"
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      />
                    )}
                    {item.text === "Last Name" && (
                      <input
                        placeholder={item.text}
                        type="text"
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      />
                    )}
                    {item.text === "House Address" && (
                      <input
                        placeholder={item.text}
                        type="text"
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      />
                    )}
                    {item.text === "Email Address" && (
                      <input
                        placeholder={item.text}
                        type="email"
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      />
                    )}
                    {item.text === "Password" && (
                      <input
                        placeholder={item.text}
                        type="password"
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      />
                    )}
                    {item.text === "Date" && (
                      <input
                        placeholder={item.text}
                        type="date"
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      />
                    )}
                    {item.text === "Phone Number" && (
                      <input
                        placeholder={item.text}
                        type="text"
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      />
                    )}
                    {item.text === "Text Area" && (
                      <textarea
                        placeholder={item.text}
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      />
                    )}
                    {item.text === "Profile Picture" && (
                      <input
                        placeholder={item.text}
                        type="file"
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      />
                    )}
                    {item.text === "File Upload" && (
                      <input
                        placeholder={item.text}
                        type="file"
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      />
                    )}
                    {item.text === "State Of Origin" && (
                      <select
                        name="state"
                        id="state"
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      >
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                        <option value="River">Rivers</option>
                        <option value="Delta">Delta</option>
                      </select>
                    )}
                    {item.text === "Nationality" && (
                      <select
                        name="Nationality"
                        id="Nationality"
                        className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
                      >
                        <option value="Nigerian">Nigerian</option>
                        <option value="Ghanian">Ghanian</option>
                        <option value="Kenyan">Kenyan</option>
                      </select>
                    )}
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
