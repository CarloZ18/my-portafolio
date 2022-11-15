import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { Container } from "../Welcome/Welcome";
import { VerticalSlideshow } from "./VerticalSlide";

export const Skills = () => {
  const myDevSkills = [
    "Html",
    "React",
    "Redux",
    "Bootstrap",
    "JavaScript",
    "Jquery",
    "Css",
    "Sass",
    "TypeScript",
  ];

  const myDesignSkills = [
    "Photoshop",
    "Illustrator",
    "Figma",
    "Premier",
    "After Effect",
  ];

  const mapDevSkills = myDevSkills.map((index, num) => (
    <MySkills key={index} principalSkill={5}>
      {myDevSkills[num]}
    </MySkills>
  ));

  const mapDesignSkills = myDesignSkills.map((index, num) => (
    <MySkills key={index} principalSkill={3}>
      {myDesignSkills[num]}
    </MySkills>
  ));

  const devSlider = useRef();
  const designSlider = useRef();

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <TitleSkills>My Skills</TitleSkills>
      <SkillsCarousel>
        <VerticalSlideshow
          title={"Developer"}
          upValue={"up-developer"}
          downValue={"down-developer"}
          content={mapDevSkills}
          numElem={8}
          reference={devSlider}
          justifyContent={"center"}
        />

        <VerticalSlideshow
          title={"Designer"}
          upValue={"up-designer"}
          downValue={"down-designer"}
          content={mapDesignSkills}
          numElem={4}
          reference={designSlider}
          justifyContent={"center"}
        />
      </SkillsCarousel>
    </Container>
  );
};

export const TitleSkills = styled(motion.h2)`
  color: ${(props) => props.theme.color};
  font-size: 2em;
  z-index: 0;
`;

export const SkillsCarousel = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
`;

export const MySkills = styled.p`
  color: ${(props) => props.theme.color};
  font-size: 15px;
  opacity: 0.5;
  z-index: 0;
  transition: 500ms ease-out all;
  &:nth-child(${(props) => props.principalSkill}) {
    font-size: 25px;
    opacity: 1;
  }
`;
