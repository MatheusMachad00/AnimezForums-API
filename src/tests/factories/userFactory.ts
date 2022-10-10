import { faker } from '@faker-js/faker';

export async function createNewUser() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    avatar: faker.internet.avatar()
  }
};