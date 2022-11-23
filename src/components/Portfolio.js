import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useCursourContext } from "./CursourContext";
// styled components
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

  .portfolio {
    h5 {
      margin-top: 1rem;
      font-size: max(3vw, 2rem);
      span {
        color: rgb(32, 132, 219);
      }
    }

    .projects {
      margin-top: 2rem;
      display: flex;
      justify-content: flex-start;

      align-items: flex-start;
      flex-direction: column;
      .website {
        a {
          font-size: max(6vw, 2rem);

          font-weight: bolder;
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
          &:hover {
            text-decoration: line-through;
          }
        }
        h6 {
          font-size: max(1.5vw, 1rem);
          text-align: center;
          color: gray;
        }
      }
    }
  }
`;
const Portfolio = () => {
  const { MouseEnter, MouseLeave } = useCursourContext();
  return (
    <Wrapper>
      <motion.h2
        className="overlay"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 0.15, scale: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, scale: 0.4 }}
      >
        My Portfolio
      </motion.h2>
      <motion.div
        className="portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h5>
          <span>My</span> Portfolio
        </h5>
        <div className="projects">
          <motion.div
            className="website"
            initial={{ opacity: 0, x: -300, transition: { duration: 0.4 } }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, x: -300, transition: { duration: 0.4 } }}
          >
            <a href="//" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
              1. Shoppy
            </a>
            <h6>Ecommerce Website Design</h6>
          </motion.div>
          <motion.div
            className="website"
            initial={{ opacity: 0, x: 300, transition: { duration: 0.4 } }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, x: 300, transition: { duration: 0.4 } }}
          >
            <a href="//" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
              2. Busy Store
            </a>
            <h6>Ecommerce Website Design</h6>
          </motion.div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Portfolio;
