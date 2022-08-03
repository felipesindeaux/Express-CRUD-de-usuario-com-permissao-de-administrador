import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (request, response, next) => {
  const token = request.headers.authorization.split(" ")[1];

  if (!token) {
    return response
      .status(401)
      .json({ status: "error", message: "Missing authorization headers" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response
        .status(401)
        .json({ status: "error", message: "Invalid token" });
    }
  });

  const { email } = jwt.decode(token, { complete: true }).payload;
  request.headers = {
    ...request.headers,
    email,
  };

  next();
};

export default verifyAuthTokenMiddleware;
