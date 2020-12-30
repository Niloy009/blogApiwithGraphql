import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';

import { importSchema } from 'graphql-import';
import express from 'express';
import { permissions } from '@middlewares/permissions';
import Mutation from '@mutations/Mutations';
import Query from '@queries/Query';
import ApolloErrorFormatter from '@utils/ApolloErrorFormatter';

// Initialize Express Application
export const app = express();

const schema = makeExecutableSchema({
  typeDefs: importSchema(__dirname + '/../gql/typeDefs.graphql'),
  resolvers: { Query, Mutation }
});

const middlewares = applyMiddleware(schema);

export const server = new ApolloServer({
  schema: middlewares,
  context: ({ req }) => ({ req }),
  formatError: ApolloErrorFormatter
});

// middleware
server.applyMiddleware({ path: '/', app });
