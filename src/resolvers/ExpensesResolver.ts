import {
  Resolver, Query, Ctx, FieldResolver, Root, Mutation, ArgsType,
  Field, Int, Args,
} from 'type-graphql'
import { Expense } from '../models/Expense'
import { RequestContext } from '../utils/RequestContext'
import ExpensesDB from '../db/ExpensesDB'
import WalletDB from '../db/WalletDB'

@ArgsType()
class RegisterExpenseArgs {
  @Field(() => Int)
  amount: number

  @Field()
  wallet: string

  @Field(() => [String])
  imageUris: string[]

  @Field({ nullable: true })
  comments?: string
}

@Resolver(() => Expense)
export default class ExpensesResolver {

  @Query(() => [Expense])
  async getExpenses(@Ctx() context: RequestContext) {
    const userId = context.event.headers["expense-tracker-user-id"]
    const expenses = await ExpensesDB.getExpenses(userId)
    return expenses
  }

  @Mutation(() => Expense)
  async registerExpense(
    @Args() args: RegisterExpenseArgs,
    @Ctx() context: RequestContext
  ) {
    const userId = context.event.headers["expense-tracker-user-id"]
    const expense = { ...args, owner: userId }
    const newExpense = await ExpensesDB.registerExpense(expense)
    console.log("newExpense:::", JSON.stringify(newExpense, null, 2))
    return newExpense
  }

  @FieldResolver()
  async wallet(@Root() expense: { wallet: string }) {
    const walletId = expense.wallet as string
    const wallet = await WalletDB.getWalletById(walletId)
    return wallet
  }
}

