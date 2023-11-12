import { useEffect } from "react";
import { useTodos } from "../../hooks/useTodos";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import Todo from "../../components/Todo/Todo";
import { Container } from "./styles";
import { Link, useNavigate } from "react-router-dom";

function Todos() {
  const navigate = useNavigate();
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
              let desc_resume;
              if (todo.desc.length > 300) {
                desc_resume = todo.desc.substring(1, 300).concat("...");
              } else {
                desc_resume = todo.desc;
              }

              return (
                <li key={index}>
                  <Link className="wrapper" to={`/todo/${todo.id}`}>
                    <Todo
                      desc={desc_resume}
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
        <Button onClick={() => navigate("/create")}>Create todo</Button>
      </div>
    </Container>
  );
}

export default Todos;
