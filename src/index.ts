import { Request, Response } from "express";

import express from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  console.log("Hi");
  res.send("Express on Vercel");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
