import { TodoType } from "../../interfaces/Todos";
import Text from "../Text/Text";
import { Container } from "./styles";
import { parseISO } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { ptBR } from "date-fns/locale";

function Todo({ desc, title, completed, createdAt }: TodoType) {
  const date = formatInTimeZone(
    parseISO(createdAt),
    "America/Sao_Paulo",
    "dd 'de' MMMM 'de' yyyy, 'as' HH:mm",
    {
      locale: ptBR,
    }
  );
  // console.log(date);
  return (
    <Container completed={completed}>
      <div className="content">
        <div className="title">
          <Text size="lg" weight="black">
            {title}
          </Text>
        </div>
        <div className="desc">
          <Text>{desc}</Text>
        </div>
        <div className="date">
          <Text size="sm">Criado em: {date}</Text>
        </div>
      </div>
    </Container>
  );
}

export default Todo;
