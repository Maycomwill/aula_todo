import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Todos from "../pages/Todos/Todos";
import Todo from "../pages/UniqueTodo/UniqueTodo";
import CreateTodo from "../pages/CreateTodo/CreateTodo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/todo/:todoId",
    element: <Todo />,
  },
  {
    path: "/create",
    element: <CreateTodo />,
  },
]);
