import users from "../database";
import jwt from "jsonwebtoken";

const verifyAdminMiddleware = (request, response, next) => {
  const token = request.headers.authorization.split(" ")[1];
  const { email } = jwt.decode(token, { complete: true }).payload;
  const user = users.find((currentUser) => currentUser.email === email);

  if (!user.isAdm) {
    return response.status(401).json({
      status: "error",
      message: "Missing admin permissions",
    });
  }

  next();
};

export default verifyAdminMiddleware;
