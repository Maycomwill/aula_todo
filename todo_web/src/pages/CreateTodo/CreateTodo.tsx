import Text from "../../components/Text/Text";
import { Container } from "./styles";

import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function CreateTodo() {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <Container>
      <Text>CreateTodo</Text>
      <Form />
      <div className="back-btn">
        <Button onClick={() => navigate("/todos")}>
          Voltar
        </Button>
      </div>
    </Container>
  );
}

export default CreateTodo;
