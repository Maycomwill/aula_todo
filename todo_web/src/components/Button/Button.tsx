import { SButton } from "./styles";
import Text from "../Text/Text";
import { ButtonHTMLAttributes } from "react";

interface TButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

function Button({ children }: TButton) {
  return (
    <SButton>
      <Text weight="black" size="md">
        {children}
      </Text>
    </SButton>
  );
}

export default Button;
