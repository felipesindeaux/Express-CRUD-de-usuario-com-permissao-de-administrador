import users from "../database";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const { email } = request.body;

  const emailIsAlreadyUsed = users.find((user) => user.email === email);

  if (emailIsAlreadyUsed) {
    return response
      .status(400)
      .json({ status: "error", message: "E-mail already registered" });
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;
