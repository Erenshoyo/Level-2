import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";

const app: Application = express();
const port = 5000;

//! Middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true })); //* "Extended: true"- ensures that the nested objects are also read.

//* Pool is a class.
const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_6zhsdSPo7DJx@ep-shiny-shape-apc0vemq-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

//* NOT NULL -> it makes sure that this entry is a required entry.
const init_db = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(40) NOT NULL,
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
app.post("/", async (req: Request, res: Response) => {
  // console.log(req.body);

  //? Request as response.
  // const body = req.body //! Here we can use selective data, even passwords get visible
  const { name, email, password } = req.body; //! So, we destructure it and use only the necessary elements.
  //* 201 -> Status:- Created
  res.status(201).json({
    message: "This message is a 'Created' test",
    data: {
      name,
      email,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
