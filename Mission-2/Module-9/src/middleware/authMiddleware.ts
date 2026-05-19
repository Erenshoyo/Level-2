import dotnet from "dotenv";
import type { NextFunction, Request, Response } from "express";
import jwt, { decode, type JwtPayload } from "jsonwebtoken";
import { pool } from "../db";

dotnet.config();

//* Custom middleware
const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Using try catch so that the whole server doesn't crash incase of an unidentified error.
    try {
      // console.log("This is a protected Route");

      //? Authorization.
      const token = req.headers.authorization;

      if (!token) {
        res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }
      // console.log(token);

      const decoded = jwt.verify(
        token as string,
        process.env.JWT_SECRET as string,
      ) as JwtPayload;

      const userData = await pool.query(
        `
      SELECT * FROM users WHERE email=$1
      `,
        [decoded.email],
      );

      console.log(userData);

      const user = userData.rows[0];
      // console.log(user);

      if (userData.rows.length === 0) {
        res.status(404).json({
          success: false,
          message: "User not found.",
        });
      }

      if (user.is_active === false) {
        res.status(403).json({
          success: false,
          message: "Forbidden.",
        });
      }

      req.user = decoded; // req : { user: {} }
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
