import { GraphQLBoolean, GraphQLID, GraphQLString } from "graphql";
import { Users } from "../entities/User";
import { UserType } from "./type";
import bcrypt from "bcrypt";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, email, password } = args;

    const newPassword = await bcrypt.hash(password, 5);

    const result = await Users.insert({
      name,
      email,
      password: newPassword,
    });

    return {
      id: result.identifiers[0].id,
      name: args.name,
      email: args.email,
      password: newPassword,
    };
  },
};

export const DELETE_USER = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, { id }: any) {
    const result = await Users.delete(id);
    if (result.affected === 1) {
      return true;
    }

    return false;
  },
};
