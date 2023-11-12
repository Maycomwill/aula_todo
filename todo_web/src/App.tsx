// import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/global";
import AppProvider from "./hooks";
// import { RouterProvider } from "react-router-dom";
import { IndexRoutes } from "./routes";
// import { router } from "./routes";

function App() {
  return (
    <AppProvider>
      {/* <ThemeProvider theme={switchTheme()}> */}
      <GlobalStyle />
      {/* <RouterProvider router={router} /> */}
      <IndexRoutes />

      {/* </ThemeProvider> */}
    </AppProvider>
  );
}

export default App;
