"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const posts_1 = __importDefault(require("./routes/posts"));
dotenv_1.default.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
const app = (0, express_1.default)();
app.use("/posts", posts_1.default);
app.use(body_parser_1.default.json({ limit: "30mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "30mb", extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 5000;
mongoose_1.default
    .connect(DB)
    .then(() => app.listen(PORT, () => console.log(`Connection achieved on port ${PORT}`)))
    .catch((err) => console.log(err.message));
