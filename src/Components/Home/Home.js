import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../Welcome/Welcome";
import myImg from "./assets/img/YAQ_5926.jpg";
import { Profession } from "./Profession";

export const Home = ({homeScroll}) => {

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id={"Home"}
    >
      {homeScroll > 100 && (
        <DivHome>
          <ContainerImg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          ></ContainerImg>
          <div>
            <IamText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Hi, my name is Carlos
              <div>
                <p>I'am</p>
                <Profession />
              </div>
            </IamText>
            <Paragraph
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, easy: "easyInOut" }}
            >
              I like to be in <b> constant learning</b>, I am passionate about
              creating
              <b> applications or systems that facilitate some activity</b> and
              that this development also has a good UX / UI experience.
            </Paragraph>
            <Paragraph
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, easy: "easyInOut" }}
            >
              I also<b> love sports and music</b>, I think these activities are
              excellent to stay healthy both physically and mentally.
            </Paragraph>
          </div>
        </DivHome>
      )}
    </Container>
  );
};

const DivHome = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  margin: 0px 50px;
`;

const ContainerImg = styled(motion.div)`
  border-radius: 50px;
  height: 400px;
  background-size: cover;
  width: 100%;
  background-position: center;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
  background-image: url(${myImg});
`;

const IamText = styled(motion.h2)`
  color:${(props)=>props.theme.color};
  font-size: 2.5em;
  z-index: 0;

  & div {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
`;

export const Paragraph = styled(motion.p)`
  color:${(props)=>props.theme.color};
  font-size: 1.5em;
`;
