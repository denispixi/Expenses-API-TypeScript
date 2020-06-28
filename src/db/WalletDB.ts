import Wallet from '../models/Wallet'
import { connect, disconnect } from './utils'

async function registerWallet(wallet: any) {
  await connect()
  let newWallet: any
  if (wallet._id) {
    newWallet = await Wallet.findByIdAndUpdate(wallet._id, wallet, { new: true })
  }
  else {
    newWallet = await (new Wallet(wallet)).save()
  }
  await disconnect()
  return newWallet
}

async function getWallets(userId: string) {
  await connect()
  const wallets = await Wallet.find({ owner: userId })
  await disconnect()
  return wallets
}

async function getWalletById(id: string) {
  await connect()
  const wallet = await Wallet.findById(id)
  await disconnect()
  return wallet
}

export default {
  registerWallet,
  getWallets,
  getWalletById,
}