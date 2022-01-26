import { GraphQLString } from "graphql";

export const HELLO = {
  type: GraphQLString,
  resolve: () => "Hello World",
};
