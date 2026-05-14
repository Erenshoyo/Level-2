import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import dns from "dns";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

dns.setDefaultResultOrder("ipv4first");
const app: Application = express();
const port = 5000;

//! Middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true })); //* "Extended: true"- ensures that the nested objects are also read.

//* Pool is a class.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

//* NOT NULL -> it makes sure that this entry is a required entry.
const init_db = async () => {
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

//? GET method with status
app.get("/", (req: Request, res: Response) => {
  // res.send("Express Server");
  res.status(200).json({
    message: "Express Server",
    author: "Tauhid",
  });
});

init_db();
//? POST method
app.post("/api/users", async (req: Request, res: Response) => {
  // console.log(req.body);

  //? Request as response.
  // const body = req.body //! Here we can use selective data, even passwords get visible
  const { name, email, password, age } = req.body; //! So, we destructure it and use only the necessary elements.

  try {
    const result = await pool.query(
      ` INSERT INTO users(name, email,
        password, age) VALUES($1, $2, $3, $4)
        RETURNING *
        `,
      [name, email, password, age],
    );

    // console.log(result);

    //* 201 -> Status:- Created
    res.status(201).json({
      message: "User created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(201).json({
      message: error.message,
      error: error,
    });
  }
});

app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT * FROM users`);
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

app.get("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
      SELECT * FROM users WHERE id = $1`,
      [id],
    );

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
        data: result.rows,
      });
    }
    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

app.put("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, password, age, is_active } = req.body;

  try {
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

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
        data: {},
      });
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
  // console.log(result);
});

app.delete("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `
      DELETE FROM users WHERE id = $1
      `,
      [id],
    );
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User Deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
