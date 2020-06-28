"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const { ValidationError } = require('apollo-server-lambda');
exports.default = {
    Datetime: new GraphQLScalarType({
        name: 'Datetime',
        description: 'Datetime custom scalar type',
        serialize(value) {
            console.log('serializing...', value);
            return value.toISOString();
        },
        parseValue(value) {
            console.log('parsing value 1...');
            return new Date(value);
        },
        parseLiteral(ast) {
            try {
                console.log('parsing value 22...', ast.value);
                if (ast.kind === Kind.STRING && !Number.isNaN(Date.parse(ast.value)))
                    return new Date(ast.value);
                throw new ValidationError('Invalid Date String');
            }
            catch (err) {
                throw new ValidationError('Invalid Date String');
            }
        },
    }),
};
//# sourceMappingURL=scalars.js.map