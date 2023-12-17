import { useNavigate, useParams } from "react-router-dom";
import { useTodos } from "../../hooks/useTodos";
import { TodoForm } from "./styles";
import { FormEvent, useEffect, useState } from "react";
import Text from "../Text/Text";
import Button from "../Button/Button";
import CheckInput from "../CheckInput/CheckInput";

function AlterForm() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.todoId;
  const { getTodo, todo, updateTodo } = useTodos();

  const [title, setTitle] = useState<string | undefined>();
  const [desc, setDesc] = useState<string | undefined>();
  const [completed, setCompleted] = useState<boolean | undefined>();

  console.log(completed);

  useEffect(() => {
    getTodo(id);
    setTitle(todo!.title);
    setDesc(todo?.desc);
    setCompleted(todo?.completed);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TodoForm
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        updateTodo({ title, desc, completed, id });
        navigate(`/todo/${todo!.id}`);
        window.location.reload();
      }}
    >
      <div className="title">
        <label htmlFor="title">
          <Text size="md">Título:</Text>
        </label>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Ex: Ir no mercado"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="desc">
        <label htmlFor="desc">
          <Text size="md">Descrição:</Text>
        </label>
        <input
          type="text"
          name="desc"
          id=""
          placeholder="Ex: Compar pão, queijo, ovos ..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="check">
        <label htmlFor="completed">
          <Text size="md">Concluído:</Text>
        </label>
        <CheckInput
          checked={completed}
          name="completed"
          onChange={() => {
            setCompleted(!completed);
          }}
        />
      </div>
      <Button type="submit">atualizar Tarefa</Button>
    </TodoForm>
  );
}

export default AlterForm;
