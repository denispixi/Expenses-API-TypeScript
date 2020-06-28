"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLHandler = void 0;
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const ExpensesResolver_1 = __importDefault(require("./resolvers/ExpensesResolver"));
const WalletsResolver_1 = __importDefault(require("./resolvers/WalletsResolver"));
exports.GraphQLHandler = (event, context, callback) => {
    type_graphql_1.buildSchema({
        resolvers: [
            ExpensesResolver_1.default,
            WalletsResolver_1.default,
        ],
        dateScalarMode: "isoDate"
    })
        .then(schema => {
        const server = new apollo_server_lambda_1.ApolloServer({
            schema,
            context: ({ event, context }) => ({
                headers: event.headers,
                functionName: context.functionName,
                event,
                context,
            }),
        });
        const graphqlHandler = server.createHandler({
            cors: {
                origin: '*',
                credentials: false,
            },
        });
        graphqlHandler(event, context, callback);
    })
        .catch(error => {
        callback(error);
    });
};
//# sourceMappingURL=index.js.map