import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_USER, DELETE_USER } from "../user/mutation";
import { GET_USER, GET_USERS } from "../user/query";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getUsers: GET_USERS,
    getUser: GET_USER,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
