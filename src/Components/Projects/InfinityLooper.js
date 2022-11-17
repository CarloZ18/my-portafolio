import { motion } from "framer-motion";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRef, useState } from "react";
import styled from "styled-components";

export const InfiniteLooper = ({ speed, direction, children }) => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef();
  const innerRef = useRef();

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const instanceWidth = width / innerRef.current.children.length;

    if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
    }
  }, [looperInstances]);

  useEffect(() => {
    setupInstances();
  }, []);
  return (
    <ContainerLoop
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      ref={outerRef}
    >
      <div className="looper__innerList" ref={innerRef}>
        {[...Array(looperInstances)].map((ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed + "s"}`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </ContainerLoop>
  );
};

const ContainerLoop = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`;
