import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const readProduct = () => {
  // console.log(process.cwd()); //! process.cwd() finds out the location of the directory
  // console.log(filePath);

  const products = fs.readFileSync(filePath, "utf-8"); //! "UTF-8" makes data human readable. node provides the data in buffers.

  return JSON.parse(products);
};

//! Here payLoad means product
export const insertProduct = (payLoad: any) => {
  fs.writeFileSync(filePath, JSON.stringify(payLoad, null, 2), "utf-8");
};
