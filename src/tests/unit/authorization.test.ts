import { jest } from "@jest/globals";
import { authService } from "../../services/authService"
import { TypeNewUserData, TypeNewLogin } from "../../types/userTypes";
import { createNewUser } from "../factories/userFactory"
import { authRepository } from "../../repositories/authRepository"

describe('Authorization unit test', () => {
  it('Signup function', async () => {
    const newUser: TypeNewUserData = await createNewUser();
    jest.spyOn(authRepository, "checkEmail").mockResolvedValueOnce(null);
    jest.spyOn(authRepository, "createUser").mockResolvedValueOnce();

    await authService.signup(newUser);
    expect(authRepository.checkEmail).toBeCalled();
    expect(authRepository.createUser).toBeCalled();
  });
});