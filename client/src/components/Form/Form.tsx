import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormState } from "../../interfaces/formInterface";
import { postActionCreate } from "../../redux/actions/postActions";
import * as api from "./../../api";

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    creator: "",
    title: "",
    message: "",
    selectedFile: "",
    tags: "",
  });

  const dispatch = useDispatch();

  const changeFormData = (data: string, toChange: string) => {
    setFormData((prevData) => {
      return { ...prevData, [toChange]: data };
    });
  };

  const saveImage = (files: FileList | null) => {
    const reader = new FileReader();

    if (files !== null && files !== undefined) {
      const file = files[0];

      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result;
        if (typeof base64 === "string") {
          setFormData((prevData) => {
            return { ...prevData, selectedFile: base64 };
          });
        }
      };
    }
  };
  const clearData = () => {
    setFormData({
      creator: "",
      title: "",
      message: "",
      selectedFile: "",
      tags: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const some = await api.createPost(formData);

    dispatch(postActionCreate(some.data.data.newPost));

    setFormData({
      creator: "",
      title: "",
      message: "",
      selectedFile: "",
      tags: "",
    });
  };

  return (
    <div className="min-w-[270px] h-[550px] bg-gray-50 w-[30%] rounded-[8px] pb-10 pt-5 flex flex-col items-center">
      <form
        className="flex flex-col items-center w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="font-bold text-xl text-center">Creating a Memory</h1>
        <input
          type="text"
          placeholder="Creator"
          className="shadow appearance-none border mt-5 rounded w-[80%] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={formData.creator}
          onChange={(e) => changeFormData(e.target.value, "creator")}
          required
        />
        <input
          type="text"
          placeholder="Title"
          className="shadow appearance-none border mt-5 rounded w-[80%] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={formData.title}
          onChange={(e) => changeFormData(e.target.value, "title")}
          required
        />
        <input
          type="text"
          placeholder="Message"
          className="shadow appearance-none border mt-5 rounded w-[80%] py-2 px-3 pb-10 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={formData.message}
          onChange={(e) => changeFormData(e.target.value, "message")}
          required
        />
        <input
          type="text"
          placeholder="Tags (Separate By Comas)"
          className="shadow appearance-none border mt-5 rounded w-[80%] py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline"
          value={formData.tags}
          onChange={(e) => changeFormData(e.target.value, "tags")}
          required
        />
        <input
          type="file"
          className="shadow appearance-none border file:border-none file:bg-blue-400 file:py-2 file:px-3 file:text-white file:rounded-[8px] mt-5 rounded w-[80%] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          accept="image/*"
          onChange={(e) => saveImage(e.target.files)}
          required
        />

        <button className="w-[90%] bg-blue-400 text-white py-2 px-3 rounded-[8px] mt-5 text-lg">
          Submit
        </button>
      </form>
      <button
        className="w-[90%] bg-red-400 text-white py-2 px-3 rounded-[8px] mt-5 text-lg"
        onClick={() => clearData()}
      >
        Clear
      </button>
    </div>
  );
};

export default Form;
