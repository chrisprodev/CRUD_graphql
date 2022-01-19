import { GraphQLString } from "graphql";

export const Hello = {
  type: GraphQLString,
  resolve: () => "Hello World",
};
