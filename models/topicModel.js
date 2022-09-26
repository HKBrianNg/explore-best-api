import mongoose from "mongoose"

const Schema = mongoose.Schema

const topicSchema = new Schema({
  id: {
    type: String,
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  contentUrl: {
    type: String
  },
}, { timestamps: true })

export default mongoose.model("topics", topicSchema);