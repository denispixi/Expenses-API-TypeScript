import mongoose from 'mongoose'

export async function connect() {
  await mongoose.connect(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
}

export async function disconnect() {
  await mongoose.connection.close()
}