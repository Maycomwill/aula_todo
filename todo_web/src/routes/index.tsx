import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Todos from "../pages/Todos/Todos";
import CreateTodo from "../pages/CreateTodo/CreateTodo";
import UpdateTodo from "../pages/UpdateTodo/UpdateTodo";
import UniqueTodo from "../pages/UniqueTodo/UniqueTodo";

export function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/todos"} element={<Todos />} />
        <Route path={"/create"} element={<CreateTodo />} />
        <Route path={"/todo/:todoId"} element={<UniqueTodo />}>
          <Route path={"/todo/:todoId/alter"} element={<UpdateTodo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
