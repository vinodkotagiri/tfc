export class PostValidator {
  static validateCreatePost (post) {
    const { title, content, image, tags } = post

    if (
      !title || typeof title !== 'string' || title.trim().length === 0
    ) {
      throw new Error('Title is required')
    }

    if (content && typeof content !== 'string') {
      throw new Error('Content must be a string')
    }

    if (image && typeof image !== 'string') {
      throw new Error('Image must be a string')
    }

    if (tags && !Array.isArray(tags)) {
      throw new Error('Tags must be an array')
    }

    if (tags && tags.some(tag => typeof tag !== 'string')) {
      throw new Error('Tags must be an array of strings')
    }
  }

  static validateGetPostById (id) {
    if (!id || typeof id !== 'string') {
      throw new Error('ID is required and must be a string')
    }
  }

  static validateUpdatePost (id, post) {
    if (!id || typeof id !== 'string') {
      throw new Error('ID is required and must be a string')
    }

    const { title, content, image, tags } = post

    if (title && (typeof title !== 'string' || title.trim().length === 0)) {
      throw new Error('Title must be a non-empty string')
    }

    if (content && typeof content !== 'string') {
      throw new Error('Content must be a string')
    }

    if (image && typeof image !== 'string') {
      throw new Error('Image must be a string')
    }

    if (tags && !Array.isArray(tags)) {
      throw new Error('Tags must be an array')
    }

    if (tags && tags.some(tag => typeof tag !== 'string')) {
      throw new Error('Tags must be an array of strings')
    }
  }

  static validateDeletePost (id) {
    if (!id || typeof id !== 'string') {
      throw new Error('ID is required and must be a string')
    }
  }

  static validateGetPostsByTag (tag, page, limit) {
    if (!tag || typeof tag !== 'string') {
      throw new Error('Tag is required and must be a string')
    }

    if (page && (!Number.isInteger(page) || page < 1)) {
      throw new Error('Page must be a positive integer')
    }

    if (limit && (!Number.isInteger(limit) || limit < 1)) {
      throw new Error('Limit must be a positive integer')
    }
  }

  static validateGetPostsByTitle (title, page, limit, filters, sort) {
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      throw new Error('Title is required and must be a non-empty string')
    }

    if (page && (!Number.isInteger(page) || page < 1)) {
      throw new Error('Page must be a positive integer')
    }

    if (limit && (!Number.isInteger(limit) || limit < 1)) {
      throw new Error('Limit must be a positive integer')
    }

    if (filters && typeof filters !== 'object') {
      throw new Error('Filters must be an object')
    }

    if (sort && typeof sort !== 'object') {
      throw new Error('Sort must be an object')
    }
  }
}

export default PostValidator
