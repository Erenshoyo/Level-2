import { Router } from "express";
import { subscriptionControllers } from "./subscription.controller";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middleware/auth";

const router = Router();

router.post(
  "/checkout",
  auth(Role.USER, Role.AUTHOR, Role.ADMIN),
  subscriptionControllers.createCheckoutSession,
);

export const subscriptionRoutes = router;
