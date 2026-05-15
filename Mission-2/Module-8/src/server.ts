import app from "./app";
import { init_db } from "./db";

const port = 5000;

const main = () => {
  init_db();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

main();
