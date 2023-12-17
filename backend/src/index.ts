import express from "express";
import rootRoute from "./routes";
import todosRoutes from "./routes/todos";
import bodyParser from "body-parser";
import userRouter from "./routes/user";
import cors from "cors";

const app = express();

app.use(
  cors()
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", rootRoute);
app.use("/todos", todosRoutes);
app.use("/user", userRouter);

app.listen(3333, () => {
  console.log("Server running");
});
