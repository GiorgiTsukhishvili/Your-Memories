import express from "express";
import { getPosts, createPost } from "./../controllers/posts";

const router = express.Router();

router.route("/").get(getPosts).post(createPost);

export default router;
