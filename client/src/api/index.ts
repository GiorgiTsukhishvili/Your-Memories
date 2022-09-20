import axios from "axios";
import { PostActionsProps } from "../interfaces/postActionsInterface";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost: PostActionsProps) =>
  axios.post(url, newPost);
