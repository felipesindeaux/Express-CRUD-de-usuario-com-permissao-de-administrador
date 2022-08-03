import users from "../../database";

const updateUserService = ({ id }, newData) => {
  if (newData.isAdm !== undefined) {
    delete newData.isAdm;
  }

  const userIndex = users.findIndex((currentUser) => currentUser.id === id);

  if (!users[userIndex].idAdm)
    users[userIndex] = {
      ...users[userIndex],
      ...newData,
      updatedOn: new Date(),
    };

  const updateReturn = { ...users[userIndex] };

  delete updateReturn.password;

  return updateReturn;
};

export default updateUserService;
