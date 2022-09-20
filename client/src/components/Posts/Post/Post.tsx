import React from "react";
import { PostActionsProps } from "../../../interfaces/postActionsInterface";

const Post = ({ post }: { post: PostActionsProps }) => {
  return (
    <div>
      <img
        src={post.selectedFile}
        alt="Memory"
        className="max-w-[250px] h-[160px] bg-contain rounded-t-[8px]"
      />
      <div className="max-w-[250px] bg-white rounded-b-[8px]">
        <h1 className="text-gray-500 px-5 py-3">{"#" + post.tags}</h1>
        <h1 className="sm:text-xl pl-8 text-lg">{post.message}</h1>
      </div>
    </div>
  );
};

export default Post;
