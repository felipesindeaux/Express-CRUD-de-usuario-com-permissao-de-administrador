import loginService from "../services/login/login.service";

export default class LoginController {
  store(request, response) {
    try {
      const token = loginService(request.body);

      return response.json(token);
    } catch (err) {
      return response.status(401).json({
        status: "error",
        message: err.message,
      });
    }
  }
}
