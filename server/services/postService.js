import PostModel from '../models/post.js'

export class PostService {
  async getPosts() {
    return PostModel.find({}).lean().exec();
  }

  async getPostById(id) {
    return PostModel.findById(id).lean().exec();
  }

  async createPost(post) {
    const newPost = PostModel.initialize(post);
    return PostModel.insertMany(newPost);
  }

  // private static method
  static initialize(post) {
    return [{...post, _id: new mongoose.Types.ObjectId()}]
  }

  async updatePost(id, post) {
    const update = { $set: post };
    const options = { new: true, runValidators: true };
    return await PostModel.findByIdAndUpdate(id, update, options).exec();
  }

  async deletePost(id) {
    return PostModel.deleteOne({ _id: id }).exec();
  }

  async getPostsByTag(tag, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    return PostModel.find({ tags: { $in: [tag] } })
      .skip(skip)
      .limit(limit)
      .lean()
      .exec();
  }
  async getPostsByTitle(title, page = 1, limit = 10, filters = {}, sort = { createdAt: -1 }) {
    const skip = (page - 1) * limit;
    return PostModel.find({ title: { $regex: new RegExp(title, 'i') }, ...filters })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean()
      .exec();
  }
}

export default PostService