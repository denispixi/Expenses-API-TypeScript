import mongoose from 'mongoose'
import { ObjectType, Field, Float } from 'type-graphql'

if (process.env.IS_OFFLINE) {
  delete mongoose.connection.models["Wallet"]
}

const WalletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  walletType: {
    type: String,
    required: true,
  },
  funds: {
    type: Number,
    required: true,
  },
  color: {
    type: String
  },
  owner: {
    type: String,
    required: true,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  }
}, {
  versionKey: false
})

export default mongoose.model('Wallet', WalletSchema)


@ObjectType()
export class Wallet {

  @Field()
  _id: string

  @Field()
  name: string

  @Field(() => Float)
  funds: number

  @Field()
  walletType: string

  @Field()
  color: string

  // @Field()
  // owner: string

  @Field()
  createdAt: Date
}
