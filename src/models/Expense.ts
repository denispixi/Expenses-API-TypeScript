import mongoose from 'mongoose'
import { ObjectType, Field, Float } from 'type-graphql'
import { Wallet } from './Wallet'

if (process.env.IS_OFFLINE) {
  delete mongoose.connection.models["Expense"]
}

const ExpenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  wallet: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  comments: {
    type: String,
    required: false,
  },
  imageUris: {
    type: [String],
    required: true
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

export default mongoose.model("Expense", ExpenseSchema)


@ObjectType()
export class Expense {

  @Field()
  _id: string

  @Field(() => Float)
  amount: number

  @Field()
  wallet: Wallet

  @Field({ nullable: true })
  comments?: string

  @Field(() => [String])
  imageUris: string[]

  @Field()
  createdAt: Date
}
