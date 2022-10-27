import { ThemeProvider } from "styled-components";
import { Home } from "./Components/Home/Home";
import { Welcome } from "./Components/Welcome/Welcome";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Welcome />
        <ThemeProvider theme={invertTheme}>
          <Home />
        </ThemeProvider>
      </ThemeProvider>
    </>
  );
}
export const theme = {
  background: "#fff",
  color: "#1297f3",
};

export const invertTheme = ({ background, color }) => ({
  background: color,
  color: background,
});

export default App;
