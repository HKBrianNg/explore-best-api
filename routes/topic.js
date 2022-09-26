import express from 'express'
import { getTopics, getTopic, createTopic, deleteTopic, updateTopic } from '../controllers/topicController.js'

const router = express.Router()

// Get all topics
router.get('/', getTopics)

// Get a single topic
router.get('/:id', getTopic)

//Post a new topic
router.post('/', createTopic)

// Delete a topic
router.delete('/:id', deleteTopic)

// Update a new topic
router.patch('/:id', updateTopic)

export default router