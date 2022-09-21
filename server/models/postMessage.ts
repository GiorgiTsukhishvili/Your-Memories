import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "A post must have title"] },
    message: { type: String, required: [true, "A post must have message"] },
    creator: { type: String, required: [true, "A post must have creator"] },
    tags: { type: [String], required: [true, "A post must have tags"] },
    selectedFile: {
      type: String,
      required: [true, "A post must have selected file"],
    },
    likeCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date() },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
