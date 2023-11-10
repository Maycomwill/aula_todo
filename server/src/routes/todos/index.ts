import { Request, Response, Router } from "express";
import { prisma } from "../../lib/prisma";
import bodyParser from "body-parser";

const parser = bodyParser.json();
const todosRoutes = Router();

todosRoutes.get("/", async (req: Request, res: Response) => {
  const todos = await prisma.todos.findMany();

  return res.status(200).send(todos);
});

todosRoutes.get("/:id", parser, async (req: Request, res: Response) => {
  const todo = await prisma.todos.findUnique({
    where: {
      id: req.params["id"],
    },
  });

  return res.status(200).send(todo);
});

todosRoutes.get("/user/:userId", parser, async (req: Request, res: Response) => {
  const userId = req.params["userId"]
  console.log(userId)
  const todos = await prisma.todos.findMany({
    where: {
      userId: req.params["userId"],
    },
  });

  console.log(todos);

  return res.status(200).send(todos);
});

todosRoutes.post("/", parser, async (req: Request, res: Response) => {
  const { title, desc, userId } = req.body;
  const todo = await prisma.todos.create({
    data: {
      title,
      desc,
      userId,
    },
  });
  res.status(201).send(todo);
});

todosRoutes.patch("/:id", parser, async (req: Request, res: Response) => {
  const { title, desc } = req.body;
  const todo = await prisma.todos.update({
    where: {
      id: req.params["id"],
    },
    data: {
      title,
      desc,
    },
  });

  return res.status(200).send(todo);
});

todosRoutes.delete("/:id", parser, async (req: Request, res: Response) => {
  await prisma.todos.delete({
    where: {
      id: req.params["id"],
    },
  });

  return res.status(200).send("Todo deleted");
});

export default todosRoutes;
