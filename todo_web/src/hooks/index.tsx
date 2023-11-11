import { ReactNode } from "react";
import { TodosContextProvider } from "../context/Todo";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <TodosContextProvider>
      {children}
    </TodosContextProvider>
  );
}

export default AppProvider;
