import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import dns from "dns";
import { userRoute } from "./modules/user/user.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";

dns.setDefaultResultOrder("ipv4first");
const app: Application = express();

//! Middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true })); //* "Extended: true"- ensures that the nested objects are also read.

//? GET method with status
app.get("/", (req: Request, res: Response) => {
  // res.send("Express Server");
  res.status(200).json({
    message: "Express Server",
    author: "Tauhid",
  });
});

app.use("/api/users", userRoute);
app.use("/api/profile", profileRoute);
app.use("/api/auth", authRoute);

export default app;
