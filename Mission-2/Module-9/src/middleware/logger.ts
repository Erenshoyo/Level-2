import type { NextFunction, Request, Response } from "express";
import fs from "fs";

const logger = (req: Request, res: Response, next: NextFunction) => {
  const log = `\nMethod -> ${req.method} Time -> ${Date.now()} url ->"${req.url}"\n`;
  fs.appendFile(`logger.txt`, log, (e) => {});
  next(); //! Without next() the server will be stuck on loading
};

export default logger;
