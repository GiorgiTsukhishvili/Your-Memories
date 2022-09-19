"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    title: { type: String },
    message: { type: String },
    creator: { type: String },
    tags: { type: [String] },
    selectedFile: { type: String },
    likeCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date() },
});
const PostMessage = mongoose_1.default.model("PostMessage", postSchema);
exports.default = PostMessage;
