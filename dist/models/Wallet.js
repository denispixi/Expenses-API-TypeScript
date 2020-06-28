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
exports.Wallet = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const type_graphql_1 = require("type-graphql");
if (process.env.IS_OFFLINE) {
    delete mongoose_1.default.connection.models["Wallet"];
}
const WalletSchema = new mongoose_1.default.Schema({
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
});
exports.default = mongoose_1.default.model('Wallet', WalletSchema);
let Wallet = class Wallet {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Wallet.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Wallet.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], Wallet.prototype, "funds", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Wallet.prototype, "walletType", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Wallet.prototype, "color", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Wallet.prototype, "createdAt", void 0);
Wallet = __decorate([
    type_graphql_1.ObjectType()
], Wallet);
exports.Wallet = Wallet;
//# sourceMappingURL=Wallet.js.map