import { LOGS } from '@constants';
import { UserService } from '@services';
import { auth } from '@utils';

import { UserLogInRequest, UserSignUpRequest } from '@interfaces/http';
import { UserDoc } from '@interfaces/entities';

const { comparePasswords, createToken, hashPassword } = auth;

class AuthService {
  async signUp({ email, username, password }: UserSignUpRequest): Promise<string> {
    const hashedPass = await hashPassword(password);

    const user: UserDoc = await UserService.createUser({ email, username, password: hashedPass });

    return createToken(user._id);
  }

  async logIn(userReq: UserLogInRequest): Promise<string> {
    const user: UserDoc = await UserService.getByLogin(userReq.login);

    const compareResult = await comparePasswords(userReq.password, user.password);
    if (!compareResult) {
      throw new Error(LOGS.ERROR.PASSWORD.COMPARING);
    }

    return createToken(user._id);
  }
}

export default new AuthService();
