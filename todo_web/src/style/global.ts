
import { ThemeProps, createGlobalStyle } from "styled-components";

import { DefaultTheme } from "styled-components";

interface MyTheme extends DefaultTheme {
  background: string;
  text: string;
}

export const lightTheme: MyTheme = {
  background: "#f4f4f5",
  text: "#18181b",
};

export const darkTheme: MyTheme = {
  background: "#18181b",
  text: "#f4f4f5",
};

const GlobalStyle = createGlobalStyle<ThemeProps<MyTheme>>`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    overflow-x: hidden;

    /* width */
::-webkit-scrollbar {
  width: 1rem;
}

  }

  body * {
    font-family: 'Inter', Sans-Serif;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
