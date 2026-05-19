import dotnet from "dotenv";
import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

dotnet.config();

//* Custom middleware
const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // console.log("This is a protected Route");

    //? Authorization.
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    console.log(token);

    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
    ) as JwtPayload;

    console.log(decoded);

    next();
  };
};

export default auth;
