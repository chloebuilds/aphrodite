import mongoose from 'mongoose'

await mongoose.connect(MONGODB_CONNECTION_STRING)
console.log('🏄‍♀️ Connected to the Server')