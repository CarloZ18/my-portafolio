
import  { ThemeProvider } from "styled-components";
import { Home } from "./Components/Home/Home";
import { Skills} from "./Components/Skills/Skills";
import { Welcome } from "./Components/Welcome/Welcome";
import { Projects } from "./Components/Projects/Projects";

function App() {
  return (
    <>
   
      <ThemeProvider theme={theme}>
        <Welcome />
        <ThemeProvider theme={invertTheme}>
          <Home />
        </ThemeProvider>
        <Skills/>
        <ThemeProvider theme={invertTheme}>
          <Projects/>
        </ThemeProvider>
      </ThemeProvider>
    </>
  );
}



export const theme = {
  background: "#2b2c2e",
  color: "#fff",
};

export const invertTheme = ({ background, color }) => ({
  background: color,
  color: background,
});

export default App;
