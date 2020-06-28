"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Expense_1 = require("../models/Expense");
const ExpensesDB_1 = __importDefault(require("../db/ExpensesDB"));
const WalletDB_1 = __importDefault(require("../db/WalletDB"));
let RegisterExpenseArgs = class RegisterExpenseArgs {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], RegisterExpenseArgs.prototype, "amount", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterExpenseArgs.prototype, "wallet", void 0);
__decorate([
    type_graphql_1.Field(() => [String]),
    __metadata("design:type", Array)
], RegisterExpenseArgs.prototype, "imageUris", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], RegisterExpenseArgs.prototype, "comments", void 0);
RegisterExpenseArgs = __decorate([
    type_graphql_1.ArgsType()
], RegisterExpenseArgs);
let ExpensesResolver = class ExpensesResolver {
    async getExpenses(context) {
        const userId = context.event.headers["expense-tracker-user-id"];
        const expenses = await ExpensesDB_1.default.getExpenses(userId);
        return expenses;
    }
    async registerExpense(args, context) {
        const userId = context.event.headers["expense-tracker-user-id"];
        const expense = { ...args, owner: userId };
        const newExpense = await ExpensesDB_1.default.registerExpense(expense);
        console.log("newExpense:::", JSON.stringify(newExpense, null, 2));
        return newExpense;
    }
    async wallet(expense) {
        const walletId = expense.wallet;
        const wallet = await WalletDB_1.default.getWalletById(walletId);
        return wallet;
    }
};
__decorate([
    type_graphql_1.Query(() => [Expense_1.Expense]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExpensesResolver.prototype, "getExpenses", null);
__decorate([
    type_graphql_1.Mutation(() => Expense_1.Expense),
    __param(0, type_graphql_1.Args()),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterExpenseArgs, Object]),
    __metadata("design:returntype", Promise)
], ExpensesResolver.prototype, "registerExpense", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExpensesResolver.prototype, "wallet", null);
ExpensesResolver = __decorate([
    type_graphql_1.Resolver(() => Expense_1.Expense)
], ExpensesResolver);
exports.default = ExpensesResolver;
//# sourceMappingURL=ExpensesResolver.js.map