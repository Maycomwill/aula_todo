import { ReactNode, createContext, useState } from "react";
import { TodoType, TodosContextProps } from "../interfaces/Todos";
import { api } from "../lib/axios";

export const TodosContext = createContext({} as TodosContextProps);

type TodosContextProviderProps = {
  children: ReactNode;
};

export function TodosContextProvider({ children }: TodosContextProviderProps) {
  const [todos, setTodos] = useState<TodoType[]>([]);
  async function getAllTodos() {
    setTodos([]);
    const todos = await api.get("/todos");
    setTodos(todos.data);
  }

  return (
    //Retorno do provedor do contexto, disponibilizando todas as funções e variáveis necessárias para montar os componentes
    <TodosContext.Provider
      value={{
        getAllTodos,
        todos
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
