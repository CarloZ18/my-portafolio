import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../Welcome/Welcome";
import myImg from "./assets/img/foto-portafolio.png";
import { Profession } from "./Profession";

export const Home = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <DivHome>
        <ImgHome
          src={myImg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />

        <IamText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Hi, my name is Carlos{" "}
          <div>
            <p>I'am</p>
            <Profession />
          </div>
        </IamText>
      </DivHome>
    </Container>
  );
};

const DivHome = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`;

const ImgHome = styled(motion.img)`
  border-radius: 50px;
  height: 40em;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const IamText = styled(motion.h2)`
  color: #fff;
  font-size: 50px;
  z-index: 0;
  & div {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
`;
