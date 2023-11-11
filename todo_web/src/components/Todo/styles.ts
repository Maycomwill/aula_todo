import styled from "styled-components";
import { darken } from "polished";

interface IContainer extends React.HTMLAttributes<HTMLElement> {
  completed: boolean;
}

function handleCompleted(completed: boolean) {
  if (completed) {
    return "#02ab37";
  }
  return "#121214";
}

export const Container = styled.div<IContainer>`
  width: calc(100% - 100px);
  height: 300px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 4px;
  text-align: center;
  background-color: ${({ completed }) => handleCompleted(completed)};
  transition: background-color 0.25s ease-in-out;
  .wrapper {
    width: 100%;
    height: 100%;
  }

  .content {
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .title {
    display: flex;
  }

  .desc {
    display: flex;
    flex: 1;
    margin: 12px 0px;
  }

  .date {
    display: flex;
  }

  :any-link {
    color: currentColor;
    text-decoration: none;
  }
  &:hover {
    background-color: ${({ completed }) =>
      darken(0.1, handleCompleted(completed))};
  }
`;
