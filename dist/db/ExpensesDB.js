"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Expense_1 = __importDefault(require("../models/Expense"));
const utils_1 = require("./utils");
async function registerExpense(expense) {
    await utils_1.connect();
    const newExpense = await new Expense_1.default(expense).save();
    await utils_1.disconnect();
    return newExpense;
}
async function getExpenses(userId) {
    await utils_1.connect();
    const expenses = await Expense_1.default.find({ owner: userId });
    await utils_1.disconnect();
    return expenses;
}
exports.default = {
    registerExpense,
    getExpenses,
};
//# sourceMappingURL=ExpensesDB.js.map