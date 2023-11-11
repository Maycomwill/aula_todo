import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Text size="lg">Home</Text>
      <Button onClick={()=> {navigate("/todos")}}>Todos</Button>
    </>
  );
}

export default Home;
