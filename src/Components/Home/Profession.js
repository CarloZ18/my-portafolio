import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const Profession = () => {
  const professions = [
    "Developer",
    "Designer",
    "Digital Marketer",
    "Entrepreneur",
  ];
  const [profession, setProfession] = useState(0);

  const changeProfession = () => {
    if (profession === 3) {
      setProfession(0);
    } else {
      setProfession((profession) => profession + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(changeProfession, 3000);
    return () => clearInterval(interval);
  }, [profession]);
  return (
    <TypeProfession
      animate={{ opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      {professions[profession]}
    </TypeProfession>
  );
};

const TypeProfession = styled(motion.p)`
  color: #212abf;
  filter: drop-shadow(0px 0px 5px #fff);
`;
