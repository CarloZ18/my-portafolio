import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

export const Profession = () => {
  const professions = [
    "Developer",
    "Designer",
    "Digital Marketer",
    "Entrepreneur",
  ];
  const [profession, setProfession] = useState(0);
  const intervalRef = useRef();
  const changeProfession = () => {
    if (profession === 3) {
      setProfession(0);
    } else {
      setProfession(profession + 1);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      changeProfession();
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, [profession]);
  return (
    <TypeProfession
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2}}
    >
      {professions[profession]}
    </TypeProfession>
  );
};

/*
const professionAnimation = keyframes`
 0% { opacity:1; }
 50% { opacity: 0 }
 100% { opacity: 1; }
`
*/

const TypeProfession = styled(motion.p)`
  color: #c51c3b;
  background: linear-gradient(270deg, #000, #c51c3b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
