import users from "../../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const loginService = ({ email, password }) => {
  const user = users.find((currentUser) => currentUser.email === email);

  if (!user) {
    throw new Error("Wrong email/password");
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return { token };
};

export default loginService;
