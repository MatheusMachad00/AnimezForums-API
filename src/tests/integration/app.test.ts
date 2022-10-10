import app from "../../app"
import { prisma } from "../../config/database";
import supertest from "supertest";
import { createNewUser } from "../factories/userFactory"

beforeEach(async () => {
  /* await prisma.$executeRaw`TRUNCATE TABLE "users"`; */
});

const server = supertest(app);

describe('Authorization test', () => {
  it('Signup', async () => {
    const user = await createNewUser();
    const result = await server.post("/signup").send(user);
    expect(result.status).toBe(201);
  });

  /* it('Login', async () => {
    const {username, password} = await createNewUser();
    const result = await server.post("/signup").send({username, password});
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Object);
  }); */
});

afterAll(async () => {
  await prisma.$disconnect();
});