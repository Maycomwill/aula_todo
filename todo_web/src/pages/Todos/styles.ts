import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ul {
    display: grid;
    align-items: center;
    justify-content: center;
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    place-content: center;
    list-style: none;
    grid-column-gap: 12px;
    grid-row-gap: 12px;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .wrapper {
    width: 100%;
    padding: 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: currentColor;
    background-color: blue;
  }

  .create-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0;
    width: 50%;

    .wrapper-btn {
      width: 100%;

      background-color: blue;
    }
  }
`;
