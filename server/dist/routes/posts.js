"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_1 = require("./../controllers/posts");
const router = express_1.default.Router();
router.route("/").get(posts_1.getPosts).post(posts_1.createPost);
router.route("/:id").patch(posts_1.updatePostLike).delete(posts_1.deletePost);
exports.default = router;
