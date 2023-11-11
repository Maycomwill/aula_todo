import { useEffect } from "react";
import { useTodos } from "../../hooks/useTodos";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import Todo from "../../components/Todo/Todo";
import { Container } from "./styles";
import { Link } from "react-router-dom";

function Todos() {
  const { getAllTodos, todos } = useTodos();
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <Container>
      <Text size="lg" weight="regular">
        Todos
      </Text>

      <ul>
        {todos !== undefined
          ? todos.map((todo, index) => {
              return (
                <li key={index}>
                  <Link className="wrapper" to={`/todo/${todo.id}`}>
                    <Todo
                      desc={todo.desc}
                      id={todo.id}
                      title={todo.title}
                      userId={todo.userId}
                      completed={todo.completed}
                      createdAt={todo.createdAt}
                    />
                  </Link>
                </li>
              );
            })
          : null}
      </ul>

      <div className="create-btn">
        <Link className="wrapper" to={"/create"}>
          <Button>Create todo</Button>
        </Link>
      </div>
    </Container>
  );
}

export default Todos;
