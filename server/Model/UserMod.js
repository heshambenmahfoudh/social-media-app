import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    coverImageUrl: {
      type: String,
    },
    profileImageUrl: {
      type: String,
    },
    about: {
      type: String,
    },
    workat: {
      type: String,
    },
    country: {
      type: String,
    },
    livein: {
      type: String,
    },
    relationship: {
      type: String,
    },
    following: {
      type: [String],
    },
    follwers: {
      type: [String],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

export default mongoose.model('User', userSchema)
