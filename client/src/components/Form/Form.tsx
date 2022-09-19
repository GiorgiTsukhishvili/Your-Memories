import React, { useState } from "react";
import { FormState } from "../../interfaces/formInterface";

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    creator: "",
    title: "",
    message: "",
    selectedFile: "",
    tags: "",
  });

  const changeFormData = (data: string, toChange: string) => {
    setFormData((prevData) => {
      return { ...prevData, [toChange]: data };
    });
  };

  console.log(formData);

  const handleSubmit = () => {};

  return (
    <div className=" bg-gray-50 w-[30%] rounded-[8px] pb-10 pt-5">
      <form
        className="flex flex-col items-center"
        onSubmit={() => handleSubmit()}
      >
        <h1 className="font-bold sm:text-xl text-sm text-center">
          Creating a Memory
        </h1>
        <input
          type="text"
          placeholder="Creator"
          className="shadow appearance-none border mt-5 rounded w-[80%] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={formData.creator}
          onChange={(e) => changeFormData(e.target.value, "creator")}
        />
        <input
          type="text"
          placeholder="Title"
          className="shadow appearance-none border mt-5 rounded w-[80%] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={formData.title}
          onChange={(e) => changeFormData(e.target.value, "title")}
        />
        <input
          type="text"
          placeholder="Message"
          className="shadow appearance-none border mt-5 rounded w-[80%] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={formData.message}
          onChange={(e) => changeFormData(e.target.value, "message")}
        />
      </form>
    </div>
  );
};

export default Form;
