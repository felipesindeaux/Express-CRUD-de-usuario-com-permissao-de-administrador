import users from "../../database";

const findUserService = (email) => {
  const user = users.find((currentUser) => currentUser.email === email);

  const userReturn = { ...user };

  delete userReturn.password;

  return userReturn;
};

export default findUserService;
