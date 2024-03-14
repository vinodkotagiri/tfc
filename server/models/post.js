import { Model, Schema } from 'mongoose'
const postSchema = new Schema({
  title: { type: String, required: true },
  tags: [{ type: String }],
  content: { type: String },
  image: { type: String, default: 'https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182289.jpg?w=740&t=st=1710243098~exp=1710243698~hmac=e925238f257b603e2dfd768c43b6e51f41f39c4ce11892e64a5f5f9199ee6491' }
})

const Post = Model('Post', postSchema)
export default Post
