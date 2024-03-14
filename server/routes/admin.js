import { Router } from "express";
import AuthMiddleware from "../middleware/auth";
import PostController from "../controllers/postController";

const router = Router();

router.post("/new", AuthMiddleware.isAdmin, PostController.createPost);
router.put("/:id", AuthMiddleware.isAdmin, PostController.editPost);
router.delete("/:id", AuthMiddleware.isAdmin, PostController.deletePost);

export default router;
