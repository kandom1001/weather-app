import Weather from "./pages/Weather";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
