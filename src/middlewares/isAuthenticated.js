import { rule } from 'graphql-shield';
import { AuthenticationError } from 'apollo-server-express';

const isAuthenticated = rule({ cache: 'contextual' })((_, __, { req }) => {});
export default isAuthenticated;
