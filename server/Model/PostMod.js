import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref:"User",
    },
    description: {
      type: String,
    },
    likes: {
      type: [String],
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true },
)

export default mongoose.model('Post', postSchema)
