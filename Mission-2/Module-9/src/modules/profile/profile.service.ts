import { pool } from "../../db";
import type { IProfile } from "./profile.intrface";

const createProfileIntoDB = async (payLoad: IProfile) => {
  // console.log(payLoad);
  const { user_id, bio, address, phone, gender } = payLoad;
  const user = await pool.query(
    `
    SELECT * FROM users WHERE id=$1
    `,
    [user_id],
  );

  if (user.rows.length === 0) {
    throw new Error("User doesn't exits");
  }

  const result = await pool.query(
    `INSERT INTO profiles(
    user_id, bio, address, phone, gender
    ) VALUES($1, $2, $3, $4, $5) RETURNNG *`,
    [user_id, bio, address, phone, gender],
  );

  return result;
};

export const profileService = {
  createProfileIntoDB,
};
