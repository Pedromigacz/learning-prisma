import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello there" });
});

app.listen(1337, () => {
  console.log("server listening on port 1337");
});
