import Topic from "../models/topicModel.js"
import { sysMsg } from "../constant.js"
import mongoose from "mongoose"

// get all topics
export const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find({}).sort({ createdAt: -1 })
    if (!topics) {
      return res.status(404).json(sysMsg[11])
    }
    res.status(200).json(topics)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// get a topic
export const getTopic = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json(sysMsg[11])
    }

    const topic = await Topic.findById(id)
    if (!topic) {
      return res.status(404).json(sysMsg[11])
    }
    res.status(200).json(topic)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// create a topic
export const createTopic = async (req, res) => {
  try {
    const newTopic = await Topic.create({ ...req.body })
    res.status(200).json(newTopic)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a topic
export const deleteTopic = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json(sysMsg[11])
    }

    const topic = await Topic.findOneAndDelete({ _id: id })

    if (!topic) {
      return res.status(404).json(sysMsg[11])
    }
    res.status(200).json(topic)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// update a topic
export const updateTopic = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json(sysMsg[11])
    }

    const topic = await Topic.findOneAndUpdate({ _id: id }, {
      ...req.body
    })

    if (!topic) {
      return res.status(404).json(sysMsg[11])
    }
    res.status(200).json(topic)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}