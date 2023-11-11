import { FormEvent, useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { TodoForm } from "./style";
import Text from "../Text/Text";

function Form() {
  const { createTodo } = useTodos();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>();
  const [desc, setDesc] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <TodoForm
      action=""
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        createTodo({ title, desc, completed });
        navigate("/todos");
      }}
    >
      <div className="title">
        <label htmlFor="title">
          <Text size="md">Título:</Text>
        </label>
        <input
          required
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
        <input
          type="checkbox"
          id="completed"
          name="interest"
          onChange={() => {
            setCompleted(!completed);
          }}
        />
      </div>
      <Button type="submit">Criar Tarefa</Button>
    </TodoForm>
  );
}

export default Form;
