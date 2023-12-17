import { Request, Response, Router } from "express";
import { prisma } from "../../lib/prisma";
import bodyParser from "body-parser";

const parser = bodyParser.json();
const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
  
    return res.status(200).send(users);
  });

userRouter.get("/:id", parser, async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.params["id"],
    },
  });

  return res.status(200).send({ user });
});

userRouter.post("/", parser, async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password,
    },
  });

  return res.status(201).send(user);
});

userRouter.patch("/:id", parser, async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await prisma.user.update({
    where: {
      id: req.params["id"],
    },
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });

  return res.status(200).send({
    user,
  });
});

userRouter.delete("/:id", parser, async (req: Request, res: Response) => {
  await prisma.user.delete({
    where: {
      id: req.params["id"],
    },
  });

  return res.status(200).send("User deleted");
});

export default userRouter;
