import styled from "styled-components";

interface ISButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SButton = styled.button<ISButton>`
  width: 50%;
  padding: 8px 0;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: #17dda7;
  text-transform: uppercase;
  transition: background-color .25s ease-in-out;

  &:hover {
    background-color: #00b9ff;
    cursor: pointer;
  }
`;
