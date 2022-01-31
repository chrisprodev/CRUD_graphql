import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    score: { type: GraphQLInt },
  },
});

export const UserScoreType = new GraphQLObjectType({
  name: "UserScore",
  fields: {
    id: { type: GraphQLID },
    score: { type: GraphQLInt },
  },
});
