import express from "express";
import { getPosts, createPost, updatePostLike } from "./../controllers/posts";

const router = express.Router();

router.route("/").get(getPosts).post(createPost);

router.route("/:id").patch(updatePostLike);

export default router;
