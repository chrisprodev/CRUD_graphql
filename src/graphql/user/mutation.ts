import { GraphQLString } from "graphql";
import { Users } from "../entities/User";
import { UserType } from "../typeDefs/user";
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
