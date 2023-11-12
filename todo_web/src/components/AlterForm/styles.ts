import { darken, tint } from "polished";
import styled from "styled-components";

export const TodoForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${() => {
    return tint(0.1, "#18181b");
  }};
  border-radius: 8px;
  padding: 12px 0px;

  .title {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    label {
      width: 20%;
    }
    input {
      width: 80%;
      outline: none;
      font-size: 16px;
      border: none;
      border-radius: 2px;
      color: ${() => {
        return darken(0.1, "#18181b");
      }};

      &::placeholder {
        color: #2b2b2f;
      }
    }
  }

  .desc {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    label {
      width: 20%;
    }
    input {
      width: 80%;
      outline: none;
      border: none;
      border-radius: 2px;
      font-size: 16px;
      color: ${() => {
        return darken(0.1, "#18181b");
      }};

      &::placeholder {
        color: #2b2b2f;
      }
    }
  }

  .check {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    label {
      width: 20%;
    }

    input {
      font-size: 16px;
      accent-color: #17dda7;
    }
  }

`;
