import { Router } from "express";
import { pool } from "../../db";
import { userController } from "./user.controller";

const router = Router();

//? POST method
router.post("/", userController.createUser);

//? GET method
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getSingleUser);

//? PUT method
router.put("/:id", userController.updateUser);

//? DELETE method
router.delete("/:id", userController.deleteUser);

export const userRoute = router;
