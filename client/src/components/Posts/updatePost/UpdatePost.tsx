import React, { useState, Fragment } from "react";
import {
  UpdatePostsProps,
  UpdatePostState,
} from "../../../interfaces/updatePostsInterface";
import { MdCloseFullscreen } from "react-icons/md";
import * as api from "./../../../api";
import { useDispatch } from "react-redux";
import { updateWholeAction } from "../../../redux/actions/postActions";

const UpdatePost = ({ post, toggle }: UpdatePostsProps) => {
  const [formData, setFormData] = useState<UpdatePostState>({
    ...post,
  });
  const dispatch = useDispatch();

  const changeFormData = (data: string, toChange: string) => {
    setFormData((prevData) => {
      return { ...prevData, [toChange]: data };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.updateWhole(post._id!, formData);

    dispatch(updateWholeAction(formData));
    console.log(1);
  };

  console.log(formData);

  return (
    <Fragment>
      <div
        className="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.3)]"
        onClick={() => toggle()}
      ></div>
      <div className="min-w-[270px] z-20 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[450px] bg-gray-50 w-[30%] rounded-[8px] pb-10 pt-5 flex flex-col items-center">
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

          <button className="w-[90%] bg-blue-400 text-white py-2 px-3 rounded-[8px] mt-12 text-lg">
            Save
          </button>
          <MdCloseFullscreen
            className="text-2xl absolute top-5 right-5 cursor-pointer"
            onClick={() => toggle()}
          />
        </form>
      </div>
    </Fragment>
  );
};

export default UpdatePost;
