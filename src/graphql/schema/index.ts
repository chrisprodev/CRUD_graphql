import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { HELLO } from "../hello/query";
import { CREATE_USER } from "../user/mutation";
import { GET_USER, GET_USERS } from "../user/query";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    hello: HELLO,
    getUsers: GET_USERS,
    getUser: GET_USER,
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
