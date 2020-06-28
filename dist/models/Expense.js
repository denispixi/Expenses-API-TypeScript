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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expense = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const type_graphql_1 = require("type-graphql");
const Wallet_1 = require("./Wallet");
if (process.env.IS_OFFLINE) {
    delete mongoose_1.default.connection.models["Expense"];
}
const ExpenseSchema = new mongoose_1.default.Schema({
    amount: {
        type: Number,
        required: true
    },
    wallet: {
        type: mongoose_1.default.Types.ObjectId,
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
});
exports.default = mongoose_1.default.model("Expense", ExpenseSchema);
let Expense = class Expense {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Expense.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], Expense.prototype, "amount", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Wallet_1.Wallet)
], Expense.prototype, "wallet", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Expense.prototype, "comments", void 0);
__decorate([
    type_graphql_1.Field(() => [String]),
    __metadata("design:type", Array)
], Expense.prototype, "imageUris", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Expense.prototype, "createdAt", void 0);
Expense = __decorate([
    type_graphql_1.ObjectType()
], Expense);
exports.Expense = Expense;
//# sourceMappingURL=Expense.js.map