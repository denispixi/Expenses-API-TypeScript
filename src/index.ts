import "reflect-metadata";
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-lambda'
import ExpensesResolver from './resolvers/ExpensesResolver'
import WalletResolver from './resolvers/WalletsResolver'

export const GraphQLHandler = (event: any, context: any, callback: any) => {
  buildSchema({
    resolvers: [
      ExpensesResolver,
      WalletResolver,
    ],
    dateScalarMode: "isoDate"
  })
    .then(schema => {
      const server = new ApolloServer({
        schema,
        context: ({ event, context }: any) => ({
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
    .catch(error => callback(error))
}