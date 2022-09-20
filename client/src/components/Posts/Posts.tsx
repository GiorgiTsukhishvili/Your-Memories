import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { PostActionsProps } from "../../interfaces/postActionsInterface";

const Posts = () => {
  const posts = useSelector((state: PostActionsProps[]) => state);

  return posts.length === 0 ? (
    <h1 className="text-4xl w-full flex justify-center items-center">
      Loading...
    </h1>
  ) : (
    <div className="w-full">
      <h1 className="text-4xl">Posts</h1>
      <div className="mt-5 flex justify-center flex-wrap gap-10">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
