import mongoose from 'mongoose'
const mongoURI = process.env.MONGODB_URI || ''

mongoose.connect(mongoURI).then(() => console.log('[mongoose connected]'))

module.exports = { mongoose }