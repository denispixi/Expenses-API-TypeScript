import WalletDB from '../db/WalletDB'
import { ArgsType, Field, Resolver, Float, Ctx, Query, Mutation, Args } from 'type-graphql'
import { Wallet } from '../models/Wallet'
import { RequestContext } from '../utils/RequestContext'


@ArgsType()
class RegisterWalletArgs {
  @Field()
  name: string

  @Field(() => Float)
  funds: number

  @Field()
  walletType: string

  @Field()
  color: string
}

@Resolver(() => Wallet)
export default class ExpensesResolver {

  @Query(() => [Wallet])
  async getWallets(@Ctx() context: RequestContext) {
    const userId = context.event.headers["expense-tracker-user-id"]
    const wallets = await WalletDB.getWallets(userId)
    return wallets
  }

  @Mutation(() => Wallet)
  async registerWallet(
    @Args() args: RegisterWalletArgs,
    @Ctx() context: RequestContext
  ) {
    const userId: string = context.event.headers["expense-tracker-user-id"]
    const newWallet: Wallet = await WalletDB.registerWallet({ ...args, owner: userId })
    console.log("newWallet:::", JSON.stringify(newWallet, null, 2))
    return newWallet
  }
}