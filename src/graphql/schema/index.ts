import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { HELLO } from "../hello/query";
import { CREATE_USER } from "../user/mutation";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    hello: HELLO,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
