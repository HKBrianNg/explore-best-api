import Video from "../models/videoModel.js"
import { sysMsg } from "../constant.js"
import mongoose from "mongoose"

// get all videos
export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ createdAt: -1 })
    if (!videos) {
      return res.status(404).json(sysMsg[5])
    }
    res.status(200).json(videos)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// get a video
export const getVideo = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json(sysMsg[5])
    }

    const video = await Video.findById(id)
    if (!video) {
      return res.status(404).json(sysMsg[5])
    }
    res.status(200).json(video)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// create a video
export const createVideo = async (req, res) => {
  const { id, category, subCategory, source, videoUrl, videoId, publishedAt, title, description, thumbnailUrl } = req.body

  try {
    const newVideo = await Video.create({ id, category, subCategory, source, videoUrl, videoId, publishedAt, title, description, thumbnailUrl })
    res.status(200).json(newVideo)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a video
export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json(sysMsg[5])
    }

    const video = await Video.findOneAndDelete({ _id: id })

    if (!video) {
      return res.status(404).json(sysMsg[5])
    }
    res.status(200).json(video)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// update a video
export const updateVideo = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json(sysMsg[5])
    }

    const video = await Video.findOneAndUpdate({ _id: id }, {
      ...req.body
    })

    if (!video) {
      return res.status(404).json(sysMsg[5])
    }
    res.status(200).json(video)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}