import axios from "axios";
import { PostActionsProps } from "../interfaces/postActionsInterface";
import { UpdatePostState } from "../interfaces/updatePostsInterface";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost: PostActionsProps) =>
  axios.post(url, newPost);

export const updateLike = (id: string, like: { likeCount: string }) =>
  axios.patch(`http://localhost:5000/posts/${id}`, like);

export const deletePost = (id: string) =>
  axios.delete(`http://localhost:5000/posts/${id}`);

export const updateWhole = (id: string, post: UpdatePostState) =>
  axios.patch(`http://localhost:5000/posts/${id}`, post);
