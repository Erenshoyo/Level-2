import bcrypt from "bcryptjs";
import { pool } from "../../db";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWT_SECRET;

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
    is_active: user.is_active,
    email: user.email,
  };
  if (!secret) throw new Error("JWT secret is not configured");

  const accessToken = jwt.sign(jwtPayload, secret, {
    expiresIn: "7d",
  });

  return { accessToken };
};

export const authService = {
  loginUserIntoDB,
};
