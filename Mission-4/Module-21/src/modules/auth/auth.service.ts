import jwt, { SignOptions } from "jsonwebtoken";
import { prisma } from "../../lib/prisma";
import { ILoginUser } from "./auth.interface";
import bcrypt from "bcrypt";
import config from "../../config";
import { jwtUtils } from "../../utils/jwt";

const loginUser = async (payload: ILoginUser) => {
  const { email, password } = payload;

  const user = await prisma.user.findUniqueOrThrow({
    where: { email },
  });

  if (user.activeStatus === "BLOCKED")
    throw new Error("Your account is blocked. Please contact support");

  const jwtPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) throw new Error("Wrong Password!!!");

  // const accessToken = jwt.sign(jwtPayload, `${config.jwt_access_secret}`, {
  //   expiresIn: config.jwt_access_expires_in || "1d",
  // } as SignOptions);

  const accessToken = jwtUtils.createToken(
    jwtPayload,
    `${config.jwt_access_secret}`,
    config.jwt_access_expires_in as SignOptions,
  );

  const refreshToken = jwtUtils.createToken(
    jwtPayload,
    `${config.jwt_refresh_secret}`,
    config.jwt_refresh_expires_in as SignOptions,
  );

  // const refreshToken = jwt.sign(jwtPayload, `${config.jwt_refresh_secret}`, {
  //   expiresIn: config.jwt_refresh_expires_in || "7d",
  // } as SignOptions);

  return { accessToken, refreshToken };
};

export const authService = {
  loginUser,
};
