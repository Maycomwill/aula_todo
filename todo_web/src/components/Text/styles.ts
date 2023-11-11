import styled from "styled-components";

interface ISText extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  weight?: "regular" | "bold" | "black";
}

function handleTextSize(size: "sm" | "md" | "lg" | undefined) {
  switch (size) {
    case "sm":
      return "12px";
    case "md":
      return "16px";
    case "lg":
      return "24px";
    case undefined:
      return "16px";
  }
}

function handleTextWeight(weight: "regular" | "bold" | "black" | undefined) {
  switch (weight) {
    case "bold":
      return "700";
    case "regular":
      return "400";
    case "black":
      return "900";
    case undefined:
      return "400";
  }
}

export const SText = styled.span<ISText>`
  font-size: ${({ size }) => handleTextSize(size)};
  font-weight: ${({ weight }) => handleTextWeight(weight)};
`;
