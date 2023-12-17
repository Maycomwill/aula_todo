import styled from "styled-components";
import { darken } from "polished";

interface IContainer extends React.HTMLAttributes<HTMLElement> {
  completed: boolean;
}

function handleCompleted(completed: boolean) {
  if (completed) {
    return "#02ab37";
  }
  return "#c5c5c5";
}

export const Container = styled.div<IContainer>`
  width: 100%;
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
    word-wrap: break-word;
    line-break: strict;
    padding: 4px;
    text-align: justify;
    width: 100%;
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
