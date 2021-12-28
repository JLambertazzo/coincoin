/**
 * API Architecture:
 * 3 Layers: API calls Service calls Service or Repository
 * API is for managing endpoints, parsing and responding
 * Service is for business logic, can call other services
 * Repository is for accessing outside services (mongodb, 3rd party api, etc)
 */
import express from 'express'
const app = express()

// demonstrating jest -- delete this when you have actual functions
export const sum = (a: number, b: number) => a + b - a + a

app.get('/', (req, res, next) => {
    res.send('API Online')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`API running on port ${port}`)
})
