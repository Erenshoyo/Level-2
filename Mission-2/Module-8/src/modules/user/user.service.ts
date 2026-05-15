import { pool } from "../../db";
import type { IUser } from "./user.interface";

const createUserIntoDB = async (payLoad: IUser) => {
  const { name, email, password, age } = payLoad;

  const result = await pool.query(
    ` INSERT INTO users(name, email,
        password, age) VALUES($1, $2, $3, $4)
        RETURNING *
        `,
    [name, email, password, age],
  );

  return result;
};

const getAllUsersFromDB = async () => {
  const result = await pool.query(`
      SELECT * FROM users`);
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await pool.query(
    `
      SELECT * FROM users WHERE id = $1`,
    [id],
  );

  return result;
};

const updateUserInDB = async (payLoad: IUser, id: string) => {
  const { name, password, age, is_active } = payLoad;
  const result = await pool.query(
    //! COALESCE -> COALESCE function is used to handle missing or NULL data.
    //!             It evaluates a list of values and returns the very first one that is not NULL.
    //!             In simple words it helps with updating each elements singlehandedly.
    `UPDATE users SET name=COALESCE($1, name), 
                     password=COALESCE($2, password), 
                     age=COALESCE($3, age),
                     is_active=COALESCE($4, is_active)
               WHERE id=$5
     RETURNING *
    `,
    [name, password, age, is_active, id],
  );

  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = await pool.query(
    `
      DELETE FROM users WHERE id = $1
      `,
    [id],
  );

  return result;
};

export const userService = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserInDB,
  deleteUserFromDB,
};
