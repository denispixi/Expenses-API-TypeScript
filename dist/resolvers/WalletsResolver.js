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
const WalletDB_1 = __importDefault(require("../db/WalletDB"));
const type_graphql_1 = require("type-graphql");
const Wallet_1 = require("../models/Wallet");
let RegisterWalletArgs = class RegisterWalletArgs {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterWalletArgs.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], RegisterWalletArgs.prototype, "funds", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterWalletArgs.prototype, "walletType", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterWalletArgs.prototype, "color", void 0);
RegisterWalletArgs = __decorate([
    type_graphql_1.ArgsType()
], RegisterWalletArgs);
let ExpensesResolver = class ExpensesResolver {
    async getWallets(context) {
        const userId = context.event.headers["expense-tracker-user-id"];
        const wallets = await WalletDB_1.default.getWallets(userId);
        return wallets;
    }
    async registerWallet(args, context) {
        const userId = context.event.headers["expense-tracker-user-id"];
        const newWallet = await WalletDB_1.default.registerWallet({ ...args, owner: userId });
        console.log("newWallet:::", JSON.stringify(newWallet, null, 2));
        return newWallet;
    }
};
__decorate([
    type_graphql_1.Query(() => [Wallet_1.Wallet]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExpensesResolver.prototype, "getWallets", null);
__decorate([
    type_graphql_1.Mutation(() => Wallet_1.Wallet),
    __param(0, type_graphql_1.Args()),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterWalletArgs, Object]),
    __metadata("design:returntype", Promise)
], ExpensesResolver.prototype, "registerWallet", null);
ExpensesResolver = __decorate([
    type_graphql_1.Resolver(() => Wallet_1.Wallet)
], ExpensesResolver);
exports.default = ExpensesResolver;
//# sourceMappingURL=WalletsResolver.js.map