// @ts-check
import mongoose from 'mongoose'
import User from '../models/User'

async function getUserByCognitoId(_id: string) {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    const user = await User.findOne({ _id })
    await mongoose.connection.close()
    return user
  } catch (error) {
    console.log('error getting user from DB:::', error)
  }
}

export default {
  getUserByCognitoId
}