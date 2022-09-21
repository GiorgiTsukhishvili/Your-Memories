"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePostLike = exports.createPost = exports.getPosts = void 0;
const postMessage_1 = __importDefault(require("../models/postMessage"));
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postMessages = yield postMessage_1.default.find();
        res.status(200).json({
            type: "success",
            data: { posts: postMessages },
        });
    }
    catch (err) {
        res.status(404).json({
            type: "fail",
            message: err,
        });
    }
});
exports.getPosts = getPosts;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = yield postMessage_1.default.create(req.body);
        res.status(200).json({
            type: "success",
            data: { newPost },
        });
    }
    catch (err) {
        res.status(404).json({
            type: "fail",
            message: err,
        });
    }
});
exports.createPost = createPost;
const updatePostLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newPost;
        if (req.body.likeCount) {
            newPost = yield postMessage_1.default.findByIdAndUpdate(req.params.id, {
                likeCount: +req.body.likeCount,
            });
        }
        else {
            newPost = yield postMessage_1.default.findByIdAndUpdate(req.params.id, req.body);
        }
        res.status(200).json({
            type: "success",
            data: { newPost },
        });
    }
    catch (err) {
        res.status(404).json({
            type: "fail",
            message: err,
        });
    }
});
exports.updatePostLike = updatePostLike;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield postMessage_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({
            type: "success",
            data: null,
        });
    }
    catch (err) {
        res.status(404).json({
            type: "fail",
            message: err,
        });
    }
});
exports.deletePost = deletePost;
