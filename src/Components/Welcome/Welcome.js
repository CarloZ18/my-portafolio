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
      <Text>Welcome to my portafolio</Text>
      <Icon
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 50 }}
        transition={{ delay: 2 }}
      >
        <ion-icon name="arrow-down-outline"></ion-icon>
      </Icon>
    </Container>
  );
};

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

export const Text = styled(motion.h1)`
  color: ${(props) => props.theme.color};
  font-weight: 400;
  font-size: 1.5rem;
`;

const Icon = styled(motion.i)``;
