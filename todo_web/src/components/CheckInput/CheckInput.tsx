import { HTMLAttributes } from "react";
import { SCheckInput } from "./styles";

interface ICheckInput extends HTMLAttributes<HTMLInputElement> {
  checked: boolean | undefined;
  name?: string;
}

function CheckInput({ checked, ...rest }: ICheckInput) {
  return <SCheckInput {...rest} checked={checked} type="checkbox" />;
}

export default CheckInput;
