import express from 'express'
import {
  collectionPost,
  createPost,
  deletePostById,
  getPostById,
  getPostUser,
  likePost,
  updatePostById,
} from '../Controller/PostController.js'
import { createPostValidator } from '../utils/validator/postValidator.js'

const postRouter = express.Router()

postRouter.post('/posts', createPostValidator, createPost)
postRouter.get('/posts/:id', getPostById)
postRouter.put('/posts/:id', updatePostById)
postRouter.delete('/posts/:id', deletePostById)
postRouter.put('/posts/likes/:id', likePost)
postRouter.get('/posts/followingPost/:id', collectionPost)
postRouter.get('/posts/userpost/:id', getPostUser)

export default postRouter
