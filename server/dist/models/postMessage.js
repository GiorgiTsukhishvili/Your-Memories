"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
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
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
const PostMessage = mongoose_1.default.model("PostMessage", postSchema);
exports.default = PostMessage;
