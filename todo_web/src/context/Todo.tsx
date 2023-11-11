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

  async function createTodo(data: {
    title: string | undefined;
    desc: string | undefined;
    completed: boolean;
  }) {
    try {
      await api.post("/todos", {
        title: data.title,
        desc: data.desc,
        completed: data.completed,
        userId: "6993e914-6d25-4209-9131-0a18957b35f1",
      });

      alert("Tarefa criada com sucesso");
    } catch (error) {
      alert("Criação da tarefa falhou");
    }
  }

  return (
    //Retorno do provedor do contexto, disponibilizando todas as funções e variáveis necessárias para montar os componentes
    <TodosContext.Provider
      value={{
        getAllTodos,
        createTodo,
        todos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
