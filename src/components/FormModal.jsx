import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "./reducers/ui-slice";

const FormModal = ({ submitFormHandler }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <div className="p-8">
      <div className="text-xl font-bold text-center mb-3 ">Create Form</div>
      <div className="w-full flex flex-col">
        <label htmlFor="name" className="text-sm font-semibold">
          Form Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Form Name"
          onChange={e => setName(e.target.value)}
          className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
        />
      </div>
      <div className="flex space-x-2 mt-3 justify-center items-center">
        <div
          className="bg-lightGrey rounded-xl px-4 py-2 flex justify-center items-center w-[100px]"
          onClick={() => dispatch(closeModal())}
        >
          Close
        </div>
        <button
          className="bg-primaryDark text-white rounded-xl px-4 py-2 flex justify-center items-center w-[100px] disabled:opacity-20"
          onClick={() => submitFormHandler(name)}
          disabled={!name.length > 0}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormModal;
