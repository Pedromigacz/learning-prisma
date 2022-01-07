import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// get all forms
app.get("/", async (req: Request, res: Response) => {
  const forms = await prisma.form.findMany();
  res.json(forms);
});

// create a field
app.post("/", async (req: Request, res: Response) => {
  const newForm = await prisma.field.create({
    data: {
      label: "New Field",
      form_id: "cky3ytju300236utwd1g6da9h",
      sort_index: 4,
    },
  });

  res.json(newForm);
});

app.listen(1337, () => {
  console.log("server listening on port 1337");
});
