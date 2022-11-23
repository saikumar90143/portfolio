import React from "react";
import { AiOutlineLaptop } from "react-icons/ai";
import {
  MdOutlineScreenSearchDesktop,
  MdOutlineDeveloperMode,
} from "react-icons/md";
import { motion } from "framer-motion";
import styled from "styled-components";

// css styles
const Wrapper = styled.section`
  height: auto;

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
  h3 {
    font-size: 2rem;
    span {
      color: rgb(32, 132, 219);
    }
  }

  /* resume */
  .resume {
    font-size: 1.2rem;
    color: white;
    position: relative;
    cursor: pointer;
    /* hr */
    hr {
      width: 200px;
      position: absolute;
      top: 50%;
      left: -130%;
    }
  }

  .whatido {
    margin-block: 1.6rem;

    h3 {
      font-size: 2rem;
      margin-bottom: 5rem;

      span {
        color: rgb(32, 132, 219);
      }
    }

    .my-expertise {
      padding-inline: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 1.2rem;
      .product-development,
      .product-design,
      .seo {
        position: relative;
        box-shadow: 0 0 3px gray;
        padding: 0.5rem;
        cursor: pointer;
        flex: 1 1 30%;

        /* on hover */
        &:hover {
          /* hover before */
          &::before {
            width: 100%;
            height: 100%;
          }
          /* icon on hover */

          .icon {
            color: white;
            fill: white;
          }
          p {
            color: black;
          }
        }
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          z-index: -4;
          background-color: rgb(32, 132, 219);
          transition: all 0.2s ease-in-out;
        }
      }
      h4 {
        font-size: 1rem;
      }
      p {
        text-align: justify;
        padding: 1rem 0;
        letter-spacing: 0.1rem;
        color: gray;
        word-break: break-all;
        line-height: 1.5rem;
      }

      /* icoons */
      .icon {
        color: rgb(32, 132, 219);
        font-size: 4rem;
        fill: rgb(32, 132, 219);
      }
    }
  }
`;
const WhatIDo = () => {
  return (
    <Wrapper>
      <motion.h2
        className="overlay"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 0.15, scale: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, scale: 0.4,}}
      >
        What I Do
      </motion.h2>
      <motion.div
        className="whatido"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span>My </span>Expertise
        </motion.h3>
        <div className="my-expertise">
          {/* product development */}
          <motion.div
            className="product-development"
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, y: "80%", transition: { duration: 0.4 } }}
          >
            <MdOutlineDeveloperMode className="icon" />
            <h4>Product Development</h4>
            <p>
              I create custom websites and mobile applications that are fast,
              responsive, easy-to-use, scalable and secured.A one-stop solution
              for all of your development tasks that helps to streamline your
              business and address end-users!
            </p>
          </motion.div>
          {/* product design */}
          <motion.div
            className="product-design"
            initial={{ opacity: 0, y: "-80px" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: "-80px", transition: { duration: 0.2 } }}
          >
            <AiOutlineLaptop className="icon" />
            <h4>Product Design</h4>
            <p>
              Working with client and community, I help design intuitive
              interfaces and experiences that are delightful to use. A visually
              appealing UI design improves user engagement on all devices and
              help get ahead in this digital age.
            </p>
          </motion.div>
          {/* seo */}
          <motion.div
            className="seo"
            initial={{ opacity: 0, y: "80px" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: "80px", transition: { duration: 0.2 } }}
          >
            <MdOutlineScreenSearchDesktop className="icon" />
            <h4>SEO</h4>
            <p>
              Knowledgeable about SEO? I know you are! The top spot on Google
              search is the holy grail of all businesses. I help implement
              various techniques and strategies that creates more opportunities
              to drive potential business wins.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <a
        href="https://drive.google.com/file/d/1SkQwx04VsORX2b6qWi-ta_HvfH_8hArm/view?usp=share_link"
        title="resume"
        className="resume"
        download="saikumar"
      >
        <hr />
        Download Resume
      </a>
    </Wrapper>
  );
};

export default WhatIDo;
