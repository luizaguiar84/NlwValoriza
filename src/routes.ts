import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUSerController } from "./controllers/CreateUserController";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();

const createUserController = new CreateUSerController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSentController = new ListUserSentComplimentsController();
const listUserReceivedController = new ListUserReceivedComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.post("/users", createUserController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);
router.get(
  "/users/compliments/sent",
  ensureAuthenticated,
  listUserSentController.handle
);
router.get(
  "/users/compliments/received",
  ensureAuthenticated,
  listUserReceivedController.handle
);

router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.get("/users", ensureAuthenticated, listUsersController.handle);
export { router };
