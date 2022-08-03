import users from "../../database";
import * as bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

const createUserService = async ({ name, email, password, isAdm }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
    id: uuidv4(),
  };

  users.push({ ...newUser });

  delete newUser.password;

  return newUser;
};

export default createUserService;
