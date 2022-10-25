import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import {faStyles} from 'font-awesome/css/font-awesome.css'
export const Welcome = () => {
  return (
    <ContainerWelcome
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <TextWelcome>Welcome to my portafolio</TextWelcome>
      <Link to={"/Home"}>
        <ButtonWelcome><FontAwesome cssModule={faStyles}/></ButtonWelcome>
      </Link>
    </ContainerWelcome>
  );
};

export const ContainerWelcome=styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
color: white;

`

export const TextWelcome=styled(motion.h1)`
color:#1297F3;
font-weight: 400;
`;

export const ButtonWelcome=styled(motion.button)`
height: 30px;
width: 30px;
border-radius: 50px;
border-style: none;
background-color:#1297F3 ;
cursor: pointer;

`
