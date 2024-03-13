import PostService from "../services/postService.js";
import PostValidator from "../server/validators/postValidator.js";
import { ERROR_CODES } from "../utils/constants.js";

export class PostController {

    constructor() {
        this.service = new PostService();
        this.validator = new PostValidator();
    }

    async createPost(req, res) {
        try {
            const post = req.body;
            this.validator.validateCreatePost(post);
            const newPost = await this.service.createPost(post);
            res.status(201).json(newPost);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: ERROR_CODES.SERVER_ERROR });
        }
    }


    async editPost(req, res) {
        try {
            const { id } = req.params;
            const post = req.body;
            await this.validator.validateUpdatePost(id, post);
            const updatedPost = await this.service.updatePost(id, post);
            res.send(updatedPost);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: ERROR_CODES.SERVER_ERROR });
        }
    }

    async getPostById(req, res) {
        try {
            const { id } = req.params;
            const post = await this.service.getPostById(id);
            if (!post) {
                return res.status(404).send({ error: ERROR_CODES.NOT_FOUND });
            }
            res.send(post);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: ERROR_CODES.SERVER_ERROR });
        }
    }

    async deletePost(req, res) {
        try {
            const { id } = req.params;
            const deletedPost = await this.service.deletePost(id);
            if (!deletedPost) {
                return res.status(404).send({ error: ERROR_CODES.NOT_FOUND });
            }
            res.send(deletedPost);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: ERROR_CODES.SERVER_ERROR });
        }
    }

    async getPostsByTag(req, res) {
        try {
            const { tag } = req.params;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            await this.validator.validateGetPostsByTag(tag, page, limit);
            const skip = (page - 1) * limit;
            const posts = await this.service.getPostsByTag(tag, page, limit);
            res.send(posts);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: ERROR_CODES.SERVER_ERROR });
        }
    }

    async searchPosts(req, res) {
        try {
            const { title, page = 1, limit = 10, filters = {}, sort = { createdAt: -1 } } = req.query;
            await this.validator.validateGetPostsByTitle(title, page, limit, filters, sort);
            const skip = (page - 1) * limit;
            const [posts, totalCount] = await Promise.all([
                this.service.getPostsByTitle(title, page, limit, filters, sort),
                PostModel.countDocuments({ title: { $regex: new RegExp(title, 'i') }, ...filters }),
            ]);
            const pages = Math.ceil(totalCount / limit);
            res.json({ posts, totalCount, page, pages });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: ERROR_CODES.SERVER_ERROR });
        }
    }

}


const postController=new PostController()


export default {
    createPost: postController.createPost.bind(postController),
    editPost: postController.editPost.bind(postController),
    getPostById: postController.getPostById.bind(postController),
    deletePost: postController.deletePost.bind(postController),
    getPostsByTag: postController.getPostsByTag.bind(postController),
    searchPosts: postController.searchPosts.bind(postController),
};


