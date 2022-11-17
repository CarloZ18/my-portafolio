import styled, { ThemeProvider } from "styled-components";
import { Home } from "./Components/Home/Home";
import { Skills } from "./Components/Skills/Skills";
import { Welcome } from "./Components/Welcome/Welcome";
import { Projects } from "./Components/Projects/Projects";
import { useState } from "react";
import { useEffect } from "react";
import { Contacts } from "./Components/Contacts/Contacts";

function App() {
  const [currentScroll, setCurrentScroll] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setCurrentScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [currentScroll]);
  return (
    <>
      <NavContainer>
        <NavLink href="#Home">Home</NavLink>
        <NavLink href="#Skills">Skills</NavLink>
        <NavLink href="#Projects">Proyects</NavLink>
        <NavLink href="#Contacts">Contact</NavLink>
      </NavContainer>
      <ThemeProvider theme={theme}>
        <Welcome />
        <ThemeProvider theme={invertTheme}>
          <Home homeScroll={currentScroll} />
        </ThemeProvider>
        <Skills skillScroll={currentScroll} />
        <ThemeProvider theme={invertTheme}>
          <Projects projectScroll={currentScroll} />
        </ThemeProvider>
        <Contacts />
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

const NavContainer = styled.nav`
  padding: 0.5em;
  background-color: #c51c3b;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  width: 100%;
  position: fixed;
  z-index: 5;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 1em;
  font-weight: 600;
`;

export default App;
