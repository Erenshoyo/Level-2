import bcrypt from "bcryptjs";
import { pool } from "../../db";
import jwt, { type JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWT_SECRET;
const refresh_secret = process.env.JWT_REFRESH_SECRET;

const loginUserIntoDB = async (payload: {
  email: string;
  password: string;
}) => {
  const { email, password } = payload;

  //* 1. Check if the user exists
  //* 2. Compare the password
  //* 3. Generate Token

  //? Checking the user and password
  const userData = await pool.query(
    `
    SELECT * FROM users WHERE email=$1`,
    [email],
  );

  if (userData.rows.length === 0) throw new Error("Invalid Credentials!");
  const user = userData.rows[0];

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) throw new Error("Invalid Credentials!");

  //? Generating JWT Token
  const jwtPayload = {
    id: user.id,
    name: user.name,
    role: user.role,
    is_active: user.is_active,
    email: user.email,
  };
  if (!secret) throw new Error("JWT secret is not configured");

  const accessToken = jwt.sign(jwtPayload, secret as string, {
    expiresIn: "1d",
  });
  const refreshToken = jwt.sign(jwtPayload, refresh_secret as string, {
    expiresIn: "90D",
  });

  return { accessToken, refreshToken };
};

const generateRefreshToken = async (token: string) => {
  if (!token) {
    throw new Error("Unauthorized");
  }
  // console.log(token);

  const decoded = jwt.verify(
    token as string,
    process.env.JWT_REFRESH_SECRET as string,
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
    throw new Error("User not found");
  }

  if (user?.is_active === false) {
    throw new Error("Forbidden!!!");
  }

  //? Generating JWT Token
  const jwtPayload = {
    id: user.id,
    name: user.name,
    role: user.role,
    is_active: user.is_active,
    email: user.email,
  };
  if (!secret) throw new Error("JWT secret is not configured");

  const accessToken = jwt.sign(jwtPayload, secret as string, {
    expiresIn: "1d",
  });

  return accessToken;
};

export const authService = {
  loginUserIntoDB,
  generateRefreshToken,
};
