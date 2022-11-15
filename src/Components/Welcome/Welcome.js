import { motion } from "framer-motion";

import styled from "styled-components";

export const Welcome = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
        <NavContainer>
        <NavLink href="default.asp">Home</NavLink>
        <NavLink href="news.asp">Skills</NavLink>
        <NavLink href="contact.asp">Proyects</NavLink>
        <NavLink href="about.asp">Contact</NavLink>
      </NavContainer>
      <Text>Welcome to my portafolio</Text>
      <Icon initial={{ opacity: 0,y:-50 }} animate={{ opacity: 1, y:50 }} transition={{delay:2}}>
        <ion-icon name="arrow-down-outline"></ion-icon>
      </Icon>
    </Container>
  );
};

const NavContainer = styled.nav`
  padding: 0.5em;
  background-color:#c51c3b;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  position: fixed;
  border-radius: 30px;
  z-index: 5;

`;

const NavLink = styled.a`
  color:#fff;
  text-decoration: none;
  margin-right: 1em;
  font-weight: 600;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  & ${NavContainer}{
    top: 50px;
  }
`;

export const Text = styled(motion.h1)`
  color: ${(props) => props.theme.color};
  font-weight: 400;
`;

const Icon = styled(motion.i)``;
