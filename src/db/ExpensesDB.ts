import Expense from '../models/Expense'
import { connect, disconnect } from './utils'

async function registerExpense(expense: any) {
  await connect()
  const newExpense = await new Expense(expense).save()
  await disconnect()
  return newExpense;
}

async function getExpenses(userId: string) {
  await connect()
  const expenses = await Expense.find({ owner: userId })
  await disconnect()
  return expenses
}

export default {
  registerExpense,
  getExpenses,
}