import { Router } from "express";
import { userController } from "./user.controller";
import auth from "../../middleware/authMiddleware";

const router = Router();

//? POST method
router.post("/", userController.createUser);

//? GET method
router.get("/", auth(), userController.getAllUsers);
router.get("/:id", userController.getSingleUser);

//? PUT method
router.put("/:id", userController.updateUser);

//? DELETE method
router.delete("/:id", userController.deleteUser);

export const userRoute = router;
