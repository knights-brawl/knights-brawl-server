import { Schema, model } from 'mongoose';

import { LOGS } from '@constants';

import { UserDoc } from '@interfaces/entities';
import { UserSignUpRequest, UserLogInRequest } from '@interfaces/http';

const userSchema: Schema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

const UserModel = model<UserDoc>('User', userSchema);

export default class UserClass extends UserModel {
  static async createUser(user: UserSignUpRequest): Promise<UserDoc> {
    const { username, email, password } = user;

    const createdDoc: UserDoc = await this.create({
      username,
      email,
      password,
    });

    return createdDoc;
  }

  static async getAll(): Promise<UserDoc[]> {
    const docs: UserDoc[] = await this.find({});

    return docs;
  }

  static async getByLogin(login: UserLogInRequest['login']): Promise<UserDoc> {
    const userDoc: UserDoc | null = await this.findOne({
      $or: [{ email: login }, { username: login }],
    });
    if (!userDoc) {
      throw new Error(LOGS.ERROR.USER.NOT_FOUND);
    }

    return userDoc;
  }

  static async getById(id: UserDoc['_id']): Promise<UserDoc> {
    const userDoc: UserDoc | null = await this.findById(id);
    if (!userDoc) {
      throw new Error(LOGS.ERROR.USER.NOT_FOUND);
    }

    return userDoc;
  }

  static async deleteById(id: UserDoc['_id']): Promise<UserDoc> {
    const userDoc: UserDoc | null = await this.findByIdAndDelete(id);
    if (!userDoc) {
      throw new Error(LOGS.ERROR.USER.NOT_FOUND);
    }

    return userDoc;
  }
}
