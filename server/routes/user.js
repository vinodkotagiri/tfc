import { Router } from 'express'
// import AuthMiddleware from '../middleware/auth.js'
import PostController from '../controllers/postController.js'
const router = Router()

router.get('/:tag', PostController.getPostsByTag)
router.get('/:id', PostController.getPostById)
router.get('/search', PostController.searchPosts)

export default router
