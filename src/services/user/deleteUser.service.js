import users from "../../database";

const deleteUserService = ({ id }) => {
  const userIndex = users.findIndex((currentUser) => currentUser.id === id);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  users.splice(userIndex, 1);

  return {
    message: "User deleted with success",
  };
};

export default deleteUserService;
