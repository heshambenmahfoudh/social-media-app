import Post from '../Model/PostMod.js'
import User from '../Model/UserMod.js'
import ApiErr from '../utils/apiErr.js'
import { ERR, FAIL, SUCCESS } from '../utils/httpStatus.js'

// CREATE POST
export async function createPost(req, res, next) {
  const { user, description, likes, imageUrl } = req.body

  try {
    const newPost = await Post.create({ user, description, likes, imageUrl })
    const savedPost = await newPost.save()

    res.status(200).json({ status: SUCCESS, data: savedPost })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed To Create Post`))
  }
}

// GET POST BY ID
export async function getPostById(req, res, next) {
  const { id } = req.params
  try {
    const post = await Post.findById(id)
    if (!post) {
      return next(new ApiErr(FAIL, 404, `Post Not Found`))
    }

    res.status(200).json({ status: SUCCESS, data: post })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed to Fetching Post`))
  }
}

// UPDATE POST BY ID
export async function updatePostById(req, res, next) {
  const { id } = req.params
  const { user, description, likes, imageUrl } = req.body
  try {
    const updatePost = await Post.findByIdAndUpdate(
      id,
      { $set: { user, description, likes, imageUrl } },
      { new: true },
    )

    res.status(200).json({ status: SUCCESS, data: updatePost })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed to Updated Post`))
  }
}

// DELETE POST BY ID
export async function deletePostById(req, res, next) {
  const { id } = req.params
  try {
    await Post.findByIdAndDelete(id)
    res.status(200).json({ status: SUCCESS, message: 'Post Has Been Deleted' })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed to Deleted Post`))
  }
}

// LIKE AND DISLIKE POST
export async function likePost(req, res, next) {
  const { id } = req.params
  const { id: bodyId } = req.body
  try {
    const post = await Post.findById(id)
    if (!post.likes.includes(bodyId)) {
      await post.updateOne({ $push: { likes: bodyId } })
      res.status(200).json({ status: SUCCESS, message: 'Post liked' })
    } else {
      await post.updateOne({ $pull: { likes: bodyId } })
      res.status(200).json({ status: SUCCESS, message: 'Post unliked' })
    }
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed to Like Post`))
  }
}

// COLLECTION POSTS WITH FOLLWING
export async function collectionPost(req, res, next) {
  const { id } = req.params

  try {
    const user = await User.findById(id)
    const userPost = await Post.find({ user: user._id }).populate('user')
    const frinds = await Promise.all(
      user.following.map((frind) => {
        return Post.find({ user: frind }).populate('user')
      }),
    )

    res.status(200).json({
      status: SUCCESS,
      data: userPost.concat(...frinds).sort((a, b) => {
        return b.createdAt - a.createdAt
      }),
    })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed to Fetching Posts`))
  }
}
// GET POST BY USER
export async function getPostUser(req, res, next) {
  const { id } = req.params

  try {
    const postUser = await Post.find({ userId: id })
      .sort({ _id: -1 })
      .populate('user')

    res.status(200).json({ status: SUCCESS, data: postUser })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed to Fetching Posts Of User`))
  }
}
