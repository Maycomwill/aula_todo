import { Request, Response, Router } from "express";

const rootRoute = Router();

rootRoute.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Server running",
  });
});

export default rootRoute;
