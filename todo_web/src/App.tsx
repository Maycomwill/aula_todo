import { ThemeProvider } from "styled-components";
import GlobalStyle, { darkTheme, lightTheme } from "./style/global";
import { useEffect, useState } from "react";
import { api } from "./lib/axios";
import { TodoType } from "./interfaces/Todos";

function App() {
  useEffect(() => {
    async function fetchingData() {
      const data = await api.get("/todos")

            setData(data.data);
    }
    fetchingData();
  }, []);
  const [data, setData] = useState<TodoType[]>();
  const [actualTheme, setActualTheme] = useState<boolean>(true);
  function switchTheme() {
    if (actualTheme === true) {
      return darkTheme;
    } else {
      return lightTheme;
    }
  }
  return (
    <ThemeProvider theme={switchTheme()}>
      <GlobalStyle />
      <div>App</div>
      <button onClick={() => setActualTheme(!actualTheme)}>
        Theme switch button
      </button>

      <ul>
        {data !== undefined
          ? data.map((todo, index) => {
              return (
                <li key={index}>
                  <span>id: {todo.id}</span>
                  <span>Todo: {todo.title}</span>
                  <span>Description: {todo.desc}</span>
                </li>
              );
            })
          : null}
      </ul>
    </ThemeProvider>
  );
}

export default App;
