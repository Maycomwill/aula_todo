import { SButton } from "./styles";
import Text from "../Text/Text";
import { ButtonHTMLAttributes } from "react";

export interface TButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

function Button({ children, ...rest }: TButton) {
  return (
    <SButton {...rest}>
      <Text weight="black" size="md">
        {children}
      </Text>
    </SButton>
  );
}

export default Button;
