import { UserClass } from '@models';

import { UserDoc } from '@interfaces/entities';
import { UserSignUpRequest } from '@interfaces/http';

class UserService {
  async createUser(user: UserSignUpRequest): Promise<UserDoc> {
    return await UserClass.createUser(user);
  }

  async getAll(): Promise<UserDoc[]> {
    return await UserClass.getAll();
  }

  async getById(id: UserDoc['id']): Promise<UserDoc> {
    return await UserClass.getById(id);
  }

  async getByLogin(login: UserDoc['username'] | UserDoc['email']): Promise<UserDoc> {
    return await UserClass.getByLogin(login);
  }

  async deleteById(id: UserDoc['id']): Promise<UserDoc> {
    return await UserClass.deleteById(id);
  }
}

export default new UserService();
