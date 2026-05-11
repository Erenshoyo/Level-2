import type { IncomingMessage } from "http";

export const parseBody = (req: IncomingMessage): Promise<any> => {
  // * data comes in three states - Pending, Resolve, Reject...
  // * Pending - the time it takes for the data to come.
  // * Resolve - the case when all the data loads.
  // * Reject - the case where data doesn't come properly or gets rejected for some issues.
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (dataChunk) => {
      body += dataChunk;
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });
};
