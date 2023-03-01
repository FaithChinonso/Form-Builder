import React, { useState } from "react";
import DynamicInput from "./DynamicInput";
import { useDispatch, useSelector } from "react-redux";

const Forms = () => {
  const [formData, setFormData] = useState("");
  const { forms } = useSelector(state => state.data);
  return (
    <div>
      <div>Forms</div>
      <div className="flex">
        <div className="w-[200px]">
          {" "}
          {forms &&
            forms.map(form => (
              <div
                onClick={() => setFormData(form.form)}
                className="bg-slate-400 mb-2 w-full rounded-sm"
              >
                {form.name}
              </div>
            ))}
        </div>
        <div
          className="relative grid grid-cols-2 justify-center space-x-3 w-full"
          onDragOver={e => {
            e.preventDefault();
          }}
        >
          {formData &&
            formData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col relative p-2 h-[100px]"
                >
                  <label>{item.text}</label>
                  <DynamicInput inputType={item.text} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Forms;