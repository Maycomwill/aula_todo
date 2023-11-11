import { useContext } from "react";

import { TodosContext } from "../context/Todo"
import { TodosContextProps } from "../interfaces/Todos";

export function useTodos(): TodosContextProps {
  const context = useContext(TodosContext);

  return context;
}
