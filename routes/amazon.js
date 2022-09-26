import express from 'express'
import request from 'request-promise'
import dotenv from 'dotenv'

dotenv.config()

const ApiKey = process.env.KEY
const baseUrl = `http://api.scraperapi.com?api_key=${ApiKey}&autoparse=true`

const router = express.Router()

// product details
router.get('/products/:productId', async (req, res) => {
  const { productId } = req.params
  try {
    console.log("productid", productId)
    const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`)
    res.json(JSON.parse(response))
  } catch (error) {
    res.json(error)
  }
})

// product reviews
router.get('/products/:productId/reviews', async (req, res) => {
  const { productId } = req.params
  try {
    const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`)
    res.json(JSON.parse(response))
  } catch (error) {
    res.json(error)
  }
})

// product offers
router.get('/products/:productId/offers', async (req, res) => {
  const { productId } = req.params
  try {
    const response = await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`)
    res.json(JSON.parse(response))
  } catch (error) {
    res.json(error)
  }
})

// Search query
router.get('/search/:searchQuery', async (req, res) => {
  const { searchQuery } = req.params
  try {
    const response = await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`)
    res.json(JSON.parse(response))
  } catch (error) {
    res.json(error)
  }
})

export default router
