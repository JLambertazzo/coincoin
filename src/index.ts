/**
 * API Architecture:
 * 3 Layers: API calls Service calls Service or Repository
 * API is for managing endpoints, parsing and responding
 * Service is for business logic, can call other services
 * Repository is for accessing outside services (mongodb, 3rd party api, etc)
 */
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import path from 'path'
import './mongoose'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`[API running :${port}]`)
})
