import { shield, and, or, not, chain } from 'graphql-shield';
import isAuthenticated from './isAuthenticated';

export const permissions = shield({
  Mutation: {
    // .. TODO
  },
  Query: {
    // .. TODO
  }
});
