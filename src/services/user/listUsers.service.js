import users from "../../database";

const listUsersService = () => {
  const usersReturn = users.map((user) => {
    const newUser = { ...user };
    delete newUser.password;
    return newUser;
  });

  return usersReturn;
};

export default listUsersService;
