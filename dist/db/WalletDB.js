"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Wallet_1 = __importDefault(require("../models/Wallet"));
const utils_1 = require("./utils");
async function registerWallet(wallet) {
    await utils_1.connect();
    let newWallet;
    if (wallet._id) {
        newWallet = await Wallet_1.default.findByIdAndUpdate(wallet._id, wallet, { new: true });
    }
    else {
        newWallet = await (new Wallet_1.default(wallet)).save();
    }
    await utils_1.disconnect();
    return newWallet;
}
async function getWallets(userId) {
    await utils_1.connect();
    const wallets = await Wallet_1.default.find({ owner: userId });
    await utils_1.disconnect();
    return wallets;
}
async function getWalletById(id) {
    await utils_1.connect();
    const wallet = await Wallet_1.default.findById(id);
    await utils_1.disconnect();
    return wallet;
}
exports.default = {
    registerWallet,
    getWallets,
    getWalletById,
};
//# sourceMappingURL=WalletDB.js.map