import { NextFunction, Request, Response, Router } from "express";
import { userController } from "./user.controller";
import { jwtUtils } from "../../utils/jwt";
import config from "../../config";
import { Role } from "../../../generated/prisma/enums";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const router = Router();

declare global {
  namespace Express {
    interface Request {
      user?: {
        email: string;
        name: string;
        id: string;
        role: Role;
      };
    }
  }
}

router.post("/register", userController.createUser);
router.get(
  "/me",
  (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.cookies);

    const { accessToken } = req.cookies;
    // console.log(accessToken);
    const verfiedToken = jwtUtils.verifyToken(
      accessToken,
      `${config.jwt_access_secret}`,
    );

    if (typeof verfiedToken === "string") throw new Error(verfiedToken);

    const { email, name, id, role } = verfiedToken;
    // console.log(verfiedToken);

    // const requiredRoles = ["ADMIN", "USER", "AUTHOR"];
    const requiredRoles = [Role.ADMIN, Role.AUTHOR, Role.USER];

    if (!requiredRoles.includes(role)) {
      return res.status(403).json({
        success: false,
        statusCode: httpStatus.FORBIDDEN,
        message: "Forbidden. You don't have permission to access this source.",
      });
    }

    req.user = {
      email,
      name,
      id,
      role,
    };
    next();
    // res.status(200).json({
    //   success: true,
    //   statusCode: 200,
    //   messgae:
    //     "User profile retrieved successfully! This is the auth middleware.",
    // });
  },
  userController.getMyProfile,
);

export const userRoutes = router;
