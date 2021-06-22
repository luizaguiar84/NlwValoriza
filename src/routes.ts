import { Router } from "express";
import { CreateUSerController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUSerController();

router.post("/users", createUserController.handle);

export { router };