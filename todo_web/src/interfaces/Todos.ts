export type TodoType = {
  title: string;
  desc: string;
  id: string;
  userId: string;
  completed: boolean;
  createdAt: string;
};

export type UserType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  todos: TodoType[];
};

export interface TodosContextProps {
  getAllTodos: () => void;
  getTodo: (id: string | undefined) => void;
  deleteTodo: (id: string) => void;
  createTodo: (data: {
    title: string | undefined;
    desc: string | undefined;
    completed: boolean;
  }) => void;
  todos: TodoType[];
  todo: TodoType | undefined;
}
