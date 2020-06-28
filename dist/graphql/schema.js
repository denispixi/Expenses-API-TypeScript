"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
exports.default = apollo_server_lambda_1.gql `

  scalar Datetime

  type Query {
    getDatetime(datetime: Datetime!): Datetime
    getExpenses: [Expense!]!
    getWallets: [Wallet!]!
  }

  type Mutation {
    registerExpense(amount: Float!, comments: String, wallet: ID!, imageUris: [String!]): Expense!
    registerWallet(name: String!, walletType: String!, funds: Float!, color: String, _id: ID): Wallet!
  }

  type User {
    _id: ID!
    email: String!
    name: String!
    expenses: [Expense!]
    wallets: [Wallet!]
  }

  type Expense {
    _id: ID!
    amount: Float!
    wallet: Wallet!
    comments: String
    imageUris: [String!]!
    createdAt: Datetime!
  }

  type Wallet {
    _id: ID!
    name: String!
    walletType: String!
    funds: Float!
    color: String
  }

`;
//# sourceMappingURL=schema.js.map