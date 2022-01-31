import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { Users } from "../entities/User";
import { UserScoreType, UserType } from "./type";
import bcrypt from "bcrypt";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    score: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { name, email, password, score } = args;

    const newPassword = await bcrypt.hash(password, 5);

    const result = await Users.insert({
      name,
      email,
      password: newPassword,
      score,
    });

    return {
      id: result.identifiers[0].id,
      name: args.name,
      email: args.email,
      password: newPassword,
      score: args.score,
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

export const UPDATE_USER = {
  type: UserScoreType,
  args: {
    id: {
      type: GraphQLID,
    },
    score: {
      type: GraphQLInt,
    },
  },
  async resolve(parents: any, { id, score }: any) {
    const userExist = await Users.findOne(id);
    if (userExist) {
      const result = await Users.update({ id }, { score });

      if (result.affected === 1) {
        return {
          id,
          score,
        };
      }
    }

    return {
      id: null,
      score: null,
    };
  },
};
