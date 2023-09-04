import express from "express";
import { createBlog } from "../controller/blogController.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, isAdmin, createBlog);

export default router;
