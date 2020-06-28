"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
if (process.env.IS_OFFLINE) {
    delete mongoose.connection.models["User"];
}
const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    email: String,
    name: String
}, {
    versionKey: false
});
exports.default = mongoose.model('User', userSchema);
//# sourceMappingURL=User.js.map