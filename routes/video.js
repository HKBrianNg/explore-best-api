import express from 'express'
import { getVideos, getVideo, createVideo, deleteVideo, updateVideo } from '../controllers/videoController.js'

const router = express.Router()

// Get all videos
router.get('/', getVideos)

// Get a single video
router.get('/:id', getVideo)

//Post a new video
router.post('/', createVideo)

// Delete a video
router.delete('/:id', deleteVideo)

// Update a new video
router.patch('/:id', updateVideo)

export default router