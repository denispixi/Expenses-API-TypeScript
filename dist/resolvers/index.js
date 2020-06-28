"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scalars_1 = __importDefault(require("./scalars"));
const ExpensesResolver_1 = __importDefault(require("./ExpensesResolver"));
exports.default = {
    Query: {
        ...ExpensesResolver_1.default.QUERIES,
    },
    Mutation: {
        ...ExpensesResolver_1.default.MUTATIONS,
    },
    ...ExpensesResolver_1.default.EXTRA_FIELDS,
    ...scalars_1.default,
};
//# sourceMappingURL=index.js.map