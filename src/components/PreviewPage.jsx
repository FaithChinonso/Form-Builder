import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DynamicInput from "./DynamicInput";
import { closeModal, openModalAndSetContent } from "./reducers/ui-slice";
import FormModal from "./FormModal";
import { addDataReducer } from "./reducers/data-slice";

const PreviewPage = ({ setShowBuilder }) => {
  const dispatch = useDispatch();

  const { form } = useSelector(state => state.data);
  const showModalHandler = () => {
    dispatch(
      openModalAndSetContent({
        modalContent: <FormModal submitFormHandler={submitFormHandler} />,
      })
    );
  };
  const submitFormHandler = name => {
    if (name === "") return;
    dispatch(
      addDataReducer({
        name,
        form,
      })
    );
    dispatch(closeModal());
  };
  return (
    <div>
      <div className="flex justify-between w-full border-b border-lightGrey py-4">
        <div
          className="text-primaryDark text-base font-semibold"
          onClick={() => setShowBuilder(true)}
        >
          Close
        </div>
      </div>
      <div
        className="relative grid grid-cols-2 justify-center space-x-3 w-full"
        onDragOver={e => {
          e.preventDefault();
        }}
      >
        {form &&
          form?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col relative p-2 h-[100px]">
                <label>{item.text}</label>
                <DynamicInput inputType={item.text} />
              </div>
            );
          })}
      </div>
      <div className="flex space-x-2 mt-3 justify-end items-center">
        <div
          className="bg-lightGrey text-xs rounded-xl px-4 py-2 flex justify-center items-center w-[100px]"
          onClick={() => setShowBuilder(true)}
        >
          Close
        </div>
        <div
          className="bg-primaryDark text-xs text-white rounded-xl px-4 py-2 flex justify-center items-center w-[120px]"
          onClick={showModalHandler}
        >
          Create Form
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
