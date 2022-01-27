import { GraphQLID, GraphQLList } from "graphql";
import { Users } from "../entities/User";
import { UserType } from "./type";

export const GET_USERS = {
  type: GraphQLList(UserType),
  resolve: async () => {
    return await Users.find();
  },
};

export const GET_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (parent: any, args: any) => {
    return await Users.findOne(args.id);
  },
};
