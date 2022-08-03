import { Router } from "express";
import UsersController from "../controllers/users.controller";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyAdminMiddleware from "../middlewares/verifyAdmin.middleware";
import verifyAdminChangeAvailabilityMiddleware from "../middlewares/verifyAdminChangeAvailability.middleware";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("", verifyEmailAvailabilityMiddleware, usersController.store);

usersRouter.use(verifyAuthTokenMiddleware);

usersRouter.get("", verifyAdminMiddleware, usersController.index);
usersRouter.get("/profile", usersController.show);

usersRouter.use(verifyAdminChangeAvailabilityMiddleware);

usersRouter.patch("/:id", usersController.update);
usersRouter.delete("/:id", usersController.delete);

export default usersRouter;
