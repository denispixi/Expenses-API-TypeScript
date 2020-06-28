"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
async function connect() {
    await mongoose_1.default.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
}
exports.connect = connect;
async function disconnect() {
    await mongoose_1.default.connection.close();
}
exports.disconnect = disconnect;
//# sourceMappingURL=index.js.map