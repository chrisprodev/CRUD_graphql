import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { Hello } from "../hello/query";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    hello: Hello,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
