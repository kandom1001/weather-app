import Weather from "./pages/Weather";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #e3e8ed;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Weather />
    </>
  );
}

export default App;
