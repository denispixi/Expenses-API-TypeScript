"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = __importDefault(require("../models/User"));
async function getUserByCognitoId(_id) {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        const user = await User_1.default.findOne({ _id });
        await mongoose_1.default.connection.close();
        return user;
    }
    catch (error) {
        console.log('error getting user from DB:::', error);
    }
}
exports.default = {
    getUserByCognitoId
};
//# sourceMappingURL=UsersDB.js.map