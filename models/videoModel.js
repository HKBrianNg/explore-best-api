import mongoose from "mongoose"

const Schema = mongoose.Schema

const videoSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  videoId: {
    type: String,
    required: true
  },
  publishedAt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.model("videos", videoSchema);