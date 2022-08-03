import listUsersService from "../services/user/listUsers.service";
import createUserService from "../services/user/createUser.service";
import updateUserService from "../services/user/updateUser.service";
import findUserService from "../services/user/findUser.service";
import deleteUserService from "../services/user/deleteUser.service";

export default class UsersController {
  async store(request, response) {
    const newUser = await createUserService(request.body);

    return response.status(201).json(newUser);
  }

  index(request, response) {
    const allUsers = listUsersService();

    return response.json(allUsers);
  }

  show(request, response) {
    const user = findUserService(request.headers.email);

    return response.json(user);
  }

  update(request, response) {
    const updatedUser = updateUserService(request.params, request.body);

    return response.json(updatedUser);
  }

  delete(request, response) {
    try {
      const deleted = deleteUserService(request.params);

      return response.json(deleted);
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  }
}
