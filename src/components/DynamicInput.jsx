import React from "react";

const DynamicInput = ({ inputType }) => {
  switch (inputType) {
    case "Email Address":
      return (
        <input
          type="email"
          placeholder={inputType}
          className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
        />
      );
    case "Password":
      return (
        <input
          type="password"
          placeholder={inputType}
          className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
        />
      );
    case "Text Area":
      return (
        <textarea
          placeholder={inputType}
          className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
        />
      );
    case "State Of Origin":
      return (
        <select
          className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
          placeholder={inputType}
        >
          <option value="Imo">Imo</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
        </select>
      );
    case "Nationality":
      return (
        <select
          className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
          placeholder={inputType}
        >
          <option value="Nigerian">Nigerian</option>
          <option value="Kenyan">Kenyan</option>
          <option value="Togolese">Togolese</option>
        </select>
      );
    case "File Upload":
      return (
        <input
          type="file"
          placeholder={inputType}
          className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
        />
      );
    case "Profile Picture":
      return (
        <input
          type="file"
          placeholder={inputType}
          className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
        />
      );
    case "Date":
      return (
        <input
          type="date"
          placeholder={inputType}
          className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
        />
      );
    default:
      return (
        <input
          type="text"
          placeholder={inputType}
          className="border border-lightGrey rounded-md p-2 w-6/7 mt-1"
        />
      );
  }
};

export default DynamicInput;
