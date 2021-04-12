import mockedEnv from 'mocked-env';
import getHashedPassword from './getHashedPassword';

const SALT_ERROR = 'SALT is not specified!';

/* eslint-disable max-len */
const PASSWORDS = ['foo', 'bar', 'baz'];
const EXPECTED_HASHES = [
  'fcc954753bdf5b67ac49cc0329703e9ad15bbe8f8bc0844b289f5dde8d4f1de1e081646675fa2da31cce116c32935d0b6f56f60fd30ab4b6983a64eddcd4e24d',
  '7aca06d6a115a603bf51a08c35d20ee3a969de2c6dfdcc569d196a4326b7022628c853f8f81fb0d8d3fba6e5b16074fa40bb5a130d427cf2208f016263d66b12',
  'cb62cd051921f97a73907dbf06fad9f4d12e9a56c457c399a66e9b22a3f767e74a93f496cc29ab2e0a9476f9b73e9fce1e9df5733a5b793bcee3d4f8d7a229e6',
];
/* eslint-enable max-len */

describe('getHashedPassword', () => {
  it('returns expected hashes', async () => {
    for (let i = 0; i < PASSWORDS.length; i++) {
      expect(await getHashedPassword(PASSWORDS[i])).toEqual(EXPECTED_HASHES[i]);
    }
  });

  it('throws error if salt is not specified', async () => {
    const restore = mockedEnv({
      SALT: undefined,
    });

    for (let i = 0; i < PASSWORDS.length; i++) {
      await expect(async () => {
        await getHashedPassword(PASSWORDS[i]);
      }).rejects.toThrow(new Error(SALT_ERROR));
    }

    restore();
  });
});
