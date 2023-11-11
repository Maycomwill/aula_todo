import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ul {
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    place-content: center;
    list-style: none;
    grid-column-gap: 12px;
    grid-row-gap: 6px;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .create-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0;
    width: 50%;
  }

  .wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: currentColor;
    }
`;
