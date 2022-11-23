import React from "react";
import styled from "styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useCursourContext } from "./CursourContext";
// css styles
const Wrapper = styled.section`
  /* overlay */
  .overlay {
    color: gray;
    z-index: -99;
    opacity: 0.15;
    font-size: 5rem;
    rotate: -90deg;
    letter-spacing: 2px;
    position: absolute;
    top: 50%;
    left: -120px;
  }

  .home-page {
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;
    .hello {
      color: rgb(32, 132, 219);
    }
    span {
      display: inline-block;
      font-size: max(2rem, 4vw);
      letter-spacing: 5px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: rgb(32, 132, 219);
      }
    }

    /* arrow */
    .arrow {
      position: relative;
      margin-top: 1rem;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: -120px;
        width: 100px;
        height: 2px;
        background-color: gray;
      }
      .arrow-icon {
        font-size: max(6vw, 3rem);
      }
    }
  }
`;
const Home = () => {
  const { MouseEnter, MouseLeave } = useCursourContext();
  const greet = "HELLO,".split("");
  const sentence = "I'M SAIKUMAR".split("");

  const work = "Web Developer".split("");
  const Letteranim = () => {
    return {
      transform: [
        "scale3d(1,1,1.4)",
        "scale3d(1.4,.55,1.6)",
        "scale3d(.75,1.25,1.7)",
        "scale3d(1.25,.85,1.8)",
        "scale3d(.9,1.05,1.9)",
        "scale3d(1,1,1)",
      ],
      transition: {
        times: [0.4, 0.2, 0.5, 0.6],
      },
    };
  };
  // animate div

  const boxvariants = {
    initial: {
      opacity: 0,
      y: -150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: 150,
      transition: { duration: 0.3 },
    },
  };
  return (
    <>
      <Wrapper>
        <motion.h2
          className="overlay"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 0.15, scale: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, scale: 0.4, }}
        >
          Hover Me
        </motion.h2>

        <motion.div
          className="home-page"
          variants={boxvariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* greet */}
          <div>
            {greet.map((greet, id) => {
              return (
                <motion.span
                  key={id}
                  whileHover={() => Letteranim()}
                  className="hello"
                >
                  {greet === " " ? "\u00A0" : greet}
                </motion.span>
              );
            })}
          </div>
          {/* name */}
          <div>
            {sentence.map((elem, id) => {
              return (
                <motion.span key={id} whileHover={() => Letteranim()}>
                  {elem === " " ? "\u00A0" : elem}
                </motion.span>
              );
            })}
          </div>
          {/* web developer */}

          {/* greet */}
          <div>
            {work.map((work, id) => {
              return (
                <motion.span key={id} whileHover={() => Letteranim()}>
                  {work === " " ? "\u00A0" : work}
                </motion.span>
              );
            })}
          </div>

          {/* arrow*/}
          <div
            className="arrow"
            onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}
          >
            <NavLink to="/whatido">
              <BsFillArrowRightCircleFill className="arrow-icon" />
            </NavLink>
          </div>
        </motion.div>
      </Wrapper>
    </>
  );
};

export default Home;
