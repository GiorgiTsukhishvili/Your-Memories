import express from "express";
import {
  getPosts,
  createPost,
  updatePostLike,
  deletePost,
} from "./../controllers/posts";

const router = express.Router();

router.route("/").get(getPosts).post(createPost);

router.route("/:id").patch(updatePostLike).delete(deletePost);

export default router;
