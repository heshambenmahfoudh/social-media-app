import express from 'express'
import {
  deleteUserById,
  followUser,
  getAllUsers,
  getUserById,
  getUsersFrinds,
  UnfollowUser,
  updateUserById,
} from '../Controller/UserController.js'

const userRouter = express.Router()

// UPDATE USER
userRouter.put(
  '/users/:id',
  updateUserById,
)

// DELETE USER
userRouter.delete('/users/:id', deleteUserById)

// GET USER
userRouter.get('/users/find/:id', getUserById)

// GET USERS
userRouter.get('/users', getAllUsers)

// FOLLOWERS USER
userRouter.put('/users/follw/:id', followUser)

// UNFOLLOWERS USER
userRouter.put('/users/unfollw/:id', UnfollowUser)

// USER FRINDS
userRouter.get('/users/frinds/:id', getUsersFrinds)

export default userRouter
