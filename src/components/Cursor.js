import React from "react";
import { motion } from "framer-motion";
import { useCursourContext } from "./CursourContext";
import styled from "styled-components";

// css styles
const Wrapper = styled.section`
  .cursor {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
  }
`;
const Cursor = () => {
  const { CursorVariants, changebg } = useCursourContext();
  return (
    <>
      <Wrapper>
        {/* custom cursor */}
        <motion.div
          className="cursor"
          variants={CursorVariants}
          animate={changebg}
        ></motion.div>
      </Wrapper>
    </>
  );
};

export default Cursor;
