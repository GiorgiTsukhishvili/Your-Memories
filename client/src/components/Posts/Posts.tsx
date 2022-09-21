import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { PostActionsProps } from "../../interfaces/postActionsInterface";
import Pagination from "../pagination/Pagination";
import usePageCalc from "../../hooks/usePageCalc";

const Posts = () => {
  const posts = useSelector((state: PostActionsProps[]) => state);

  const {
    currentPage,
    setCurrentPage,
    indexOfFirstSearch,
    indexOfLastSearch,
    searchPerPage,
  } = usePageCalc();

  const currentsearch = posts.slice(indexOfFirstSearch, indexOfLastSearch);

  return posts.length === 0 ? (
    <h1 className="text-4xl w-full flex justify-center items-center">
      Loading...
    </h1>
  ) : (
    <div className="w-full">
      <h1 className="text-4xl">Posts</h1>
      <div className="mt-5 flex sm:justify-start justify-center flex-wrap gap-10">
        {currentsearch.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        length={posts.length}
        perPage={searchPerPage}
      />
    </div>
  );
};

export default Posts;
