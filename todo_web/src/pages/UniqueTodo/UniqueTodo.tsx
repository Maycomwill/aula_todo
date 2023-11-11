import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodos } from "../../hooks/useTodos";
import Todo from "../../components/Todo/Todo";
import { Container } from "./styles";
import Button from "../../components/Button/Button";

function UniqueTodo() {
  const { getTodo, todo, deleteTodo } = useTodos();
  const params = useParams();
  const navigate = useNavigate();
  const id = params.todoId;

  useEffect(() => {
    getTodo(id);
  }, []);

  function handleDeleteTodo() {
    console.log("chegou");
    const deletePromt = confirm("Tem certeza que deseja apagar a tarefa?");
    if (deletePromt) {
      deleteTodo(todo!.id);
      navigate("/todos");
    }
  }

  if (todo !== undefined) {
    return (
      <Container>
        <Todo
          completed={todo.completed}
          title={todo.title}
          desc={todo.desc}
          createdAt={todo.createdAt}
          userId={todo.userId}
          id={todo.id}
        />
        <div className="controlls">
          <Button onClick={() => console.log("AA")}>Alterar</Button>
          <Button onClick={() => handleDeleteTodo()}>Deletar</Button>
          <Button onClick={() => navigate(-1)}>Voltar</Button>
        </div>
      </Container>
    );
  } else {
    return null;
  }
}
export default UniqueTodo;
