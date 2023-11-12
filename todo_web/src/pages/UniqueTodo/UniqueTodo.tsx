import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
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
  }, [getTodo, id]);

  function handleDeleteTodo() {
    console.log("chegou");
    const deletePromt = confirm("Tem certeza que deseja apagar a tarefa?");
    if (deletePromt) {
      deleteTodo(todo!.id);
      navigate("/todos");
      window.location.reload();
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
          <Button onClick={() => navigate(`/todo/${id}/alter`)}>Alterar</Button>
          <Button onClick={() => handleDeleteTodo()}>Deletar</Button>
          <Button onClick={() => navigate("/todos")}>Voltar</Button>
        </div>
        <Outlet />
      </Container>
    );
  } else {
    return null;
  }
}
export default UniqueTodo;
