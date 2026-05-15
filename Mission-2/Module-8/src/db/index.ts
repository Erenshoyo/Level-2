import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

//* Pool is a class.
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

//* NOT NULL -> it makes sure that this entry is a required entry.
export const init_db = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(40),
        email VARCHAR(40) UNIQUE NOT NULL,
        password VARCHAR(40) NOT NULL,
        is_active BOOLEAN DEFAULT true,
        age INT,
        
        created_at TIMESTAMP DEFAULT NOW(),
        update_at TIMESTAMP DEFAULT NOW()
        )
        
        `);
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(error);
  }
};
