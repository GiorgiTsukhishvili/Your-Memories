import { Request, Response } from "express";
import mongoose from "mongoose";
import PostMessage from "../models/postMessage";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json({
      type: "success",
      data: { posts: postMessages },
    });
  } catch (err) {
    res.status(404).json({
      type: "fail",
      message: err,
    });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const newPost = await PostMessage.create(req.body);

    res.status(200).json({
      type: "success",
      data: { newPost },
    });
  } catch (err) {
    res.status(404).json({
      type: "fail",
      message: err,
    });
  }
};

export const updatePostLike = async (req: Request, res: Response) => {
  try {
    let newPost;

    if (req.body.likeCount) {
      newPost = await PostMessage.findByIdAndUpdate(req.params.id, {
        likeCount: +req.body.likeCount,
      });
    } else {
      newPost = await PostMessage.findByIdAndUpdate(req.params.id, req.body);
    }

    res.status(200).json({
      type: "success",
      data: { newPost },
    });
  } catch (err) {
    res.status(404).json({
      type: "fail",
      message: err,
    });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    await PostMessage.findByIdAndDelete(req.params.id);

    res.status(200).json({
      type: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      type: "fail",
      message: err,
    });
  }
};
