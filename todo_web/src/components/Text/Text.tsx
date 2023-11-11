import { SText } from "./styles";

type TText = {
  children: string | string[];
  size?: "sm" | "md" | "lg";
  weight?: "regular" | "bold" | "black";
};
function Text({ children, size, weight }: TText) {
  return <SText size={size} weight={weight}>{children}</SText>;
}

export default Text;
