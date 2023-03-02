import React, { useState } from "react";
import DynamicInput from "./DynamicInput";
import { useDispatch, useSelector } from "react-redux";

const Forms = () => {
  const { forms } = useSelector(state => state.data);
  const [formData, setFormData] = useState(forms[0]?.form || []);
  return (
    <div>
      <div className="my-6 font-bold">Forms</div>
      <div className="flex">
        <div className="w-[200px]">
          {" "}
          {forms &&
            forms.map(form => (
              <div
                onClick={() => setFormData(form.form)}
                className="bg-slate-100 mb-2 w-full rounded-sm p-2"
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
