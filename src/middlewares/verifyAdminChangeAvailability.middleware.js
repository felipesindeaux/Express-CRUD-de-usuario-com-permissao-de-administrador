import users from "../database";

const verifyAdminChangeAvailabilityMiddleware = (request, response, next) => {
  const { email } = request.headers;

  const targetId = request.params.id;

  const user = users.find((currentUser) => currentUser.email === email);

  if (!user) {
    return response.status(400).json({
      status: "error",
      message: "User not found",
    });
  }

  if (!user.isAdm && targetId !== user.id) {
    return response.status(401).json({
      status: "erros",
      message: "Missing admin permissions",
    });
  }
  next();
};

export default verifyAdminChangeAvailabilityMiddleware;
