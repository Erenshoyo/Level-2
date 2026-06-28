import { NextFunction, Request, Response, Router } from "express";
import { userController } from "./user.controller";
import { jwtUtils } from "../../utils/jwt";
import config from "../../config";
import { Role } from "../../../generated/prisma/enums";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../lib/prisma";
import { auth } from "../../middleware/auth";

const router = Router();

router.post("/register", userController.createUser);

router.get(
  "/me",
  // (req: Request, res: Response, next: NextFunction) => {
  //   // console.log(req.cookies);

  //   const { accessToken } = req.cookies;
  //   // console.log(accessToken);
  //   const verifiedToken = jwtUtils.verifyToken(
  //     accessToken,
  //     `${config.jwt_access_secret}`,
  //   );

  //   if (!verifiedToken.success) {
  //     throw new Error(verifiedToken.error);
  //   }

  //   const { email, name, id, role } = verifiedToken.data as JwtPayload;
  //   // console.log(verfiedToken);

  //   // const requiredRoles = ["ADMIN", "USER", "AUTHOR"];
  //   const requiredRoles = [Role.ADMIN, Role.AUTHOR, Role.USER];

  //   if (!requiredRoles.includes(role)) {
  //     return res.status(403).json({
  //       success: false,
  //       statusCode: httpStatus.FORBIDDEN,
  //       message: "Forbidden. You don't have permission to access this source.",
  //     });
  //   }

  //   req.user = {
  //     email,
  //     name,
  //     id,
  //     role,
  //   };
  //   next();
  //   // res.status(200).json({
  //   //   success: true,
  //   //   statusCode: 200,
  //   //   messgae:
  //   //     "User profile retrieved successfully! This is the auth middleware.",
  //   // });
  // }
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
  userController.getMyProfile,
);

router.put(
  "/my-profile",
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
  userController.updateMyProfile,
);

export const userRoutes = router;
