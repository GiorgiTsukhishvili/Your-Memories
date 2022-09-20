import React from "react";
import { PostActionsProps } from "../../../interfaces/postActionsInterface";
import { AiOutlineLike } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import * as api from "./../../../api/index";
import { useDispatch } from "react-redux";
import { postActionUpdate } from "../../../redux/actions/postActions";
import moment from "moment";

const Post = ({ post }: { post: PostActionsProps }) => {
  const dispatch = useDispatch();

  const updateLike = async () => {
    await api.updateLike(post._id!, {
      likeCount: (post.likeCount! + 1).toString(),
    });

    dispatch(postActionUpdate(post));
  };

  return (
    <div className="relative">
      <img
        src={post.selectedFile}
        alt="Memory"
        className="w-[250px] h-[160px] bg-contain rounded-t-[8px]"
      />
      <div className="max-w-[250px] bg-white rounded-b-[8px]">
        <h1 className="text-gray-500 px-5 py-3">{"#" + post.tags}</h1>
        <h1 className="sm:text-xl pl-8 text-lg w-[240px]">{post.message}</h1>

        <div className="flex justify-between px-5 py-3 ">
          <div className="flex gap-2 items-center">
            <AiOutlineLike
              className="text-xl cursor-pointer text-blue-600"
              onClick={updateLike}
            />
            <h1 className="text-xl">{post.likeCount}</h1>
          </div>
          <BsTrash className="text-xl cursor-pointer text-blue-600" />
        </div>
      </div>

      <div className="absolute top-0 left-0 pl-3 pt-2 bg-[rgba(0,0,0,0.3)] rounded-t-[8px] h-[160px] w-[250px]">
        <div className="flex gap-3">
          <h1 className="text-white font-semibold">{post.creator}</h1>
          <h1 className="text-white font-semibold">{post.title}</h1>
        </div>
        {typeof post.createdAt !== "undefined" && (
          <h1 className="text-white font-semibold">
            Created {moment(post.createdAt).fromNow()}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Post;
