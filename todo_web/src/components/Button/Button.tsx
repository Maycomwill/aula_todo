import { SButton } from "./styles";
import Text from "../Text/Text";

function Button({ children }: { children: string }) {
  return (
    <SButton>
      <Text weight="black" size="md">
        {children}
      </Text>
    </SButton>
  );
}

export default Button;
