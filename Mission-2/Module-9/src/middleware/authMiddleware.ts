import type { NextFunction, Request, Response } from "express";

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

    next();
  };
};

export default auth;
