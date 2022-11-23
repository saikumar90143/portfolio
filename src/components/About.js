import React from "react";
import { motion } from "framer-motion";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { TbBrandJavascript} from "react-icons/tb";
import { useCursourContext } from "./CursourContext";
import {BsGithub} from 'react-icons/bs'
import {
  SiJquery,
  SiSass,
  SiReact,
  SiRedux,
  SiBootstrap,
  SiZapier,
  SiAdobephotoshop
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";

import styled from "styled-components";
// import Textsphere from "./Textsphere";

// css styles
const Wrapper = styled.section`
height: auto;

/* overlay */
.overlay{
  color: gray;
  z-index: -99;
  opacity: 0.15;
  font-size: 5rem;
  rotate: -90deg;
  letter-spacing:2px;
  position: absolute;
  top:50%;
  left:-120px;
}

  .about-page {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
    .about-content {
      flex: 1 1 45%;
      h4 {
        color: white;
        font-size: 1.8rem;
        span {
          color: rgb(32, 132, 219);
        }
      }
      p {
        text-align: justify;
        line-height: 2rem;
        color: gray;
        letter-spacing: 0.0625rem;

        word-break: break-all;
        padding: 2.5rem;
        span {
          color: rgb(32, 132, 219);
        }
      }

      h5 {
        font-size: max(1.5rem,3vw);
      }
      progress {
        width: 70%;
      }
    }

    /* sphere */
    .about-skills {
      flex: 1 1 45%;
      h4{
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
        span{
          color:rgb(32, 132, 219);
        }
      }
      .skills {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;

        gap: 2rem;
        div {
          cursor: pointer;
          .icon {
            font-size: 2rem;
            
            &:hover {
              transform: scale3d(1.5, 1.5, 1);
              
            }
          }
          p{
            letter-spacing: 1px;
          }
          /* html */
          .html {
            color: #ff0000;
            fill: #ff0000;
          }
          /* css */
          .css {
            color: #2965f1;
            fill: #2965f1;
          }
          /* java script */
          .js {
            color: #f0db4f;
            fill: #f0db4f;
          }
          /* jquery */
          .jquery {
            color: #78cff5;
            fill: #78cff5;
          }
          /* sass */
          .sass {
            color: #cd6799;
            fill: #cd6799;
          }
          /* react */
          .react {
            color: #61dbfb;
            fill: #61dbfb;
          }
          /* redux */
          .redux {
            color: #764abc;
            fill: #764abc;
          }
          /* bootstrap */
          .bootstrap {
            color: #563d7c;
            fill: #563d7c;
          }
          /* json */
          .json {
            color: #f0db4f;
            fill: #f0db4f;
          }
          /* rest api */
          .api{
            color:skyblue;
            fill:skyblue;
          }
          /* photo shop */
          .ps{
            color:#323c7b;
            fill:#323c7b;
          }
          
        }
      }
    }
  }
`;
const About = () => {
  const {MouseEnter,MouseLeave}=useCursourContext();
  return (
    <>
      <Wrapper>
      <motion.h2 className="overlay" 
      initial={{opacity:0, scale:0.4 }}
        animate={{opacity:0.15, scale:1 ,transition:{duration:1}}}
        exit={{opacity:0, scale:0.4,}} >About Me</motion.h2>


        <div className="about-page">
          <motion.div
            className="about-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h4>
              <span>About</span> me
            </h4>
            <motion.p
              initial={{opacity:0, y: "-80%" }}
              animate={{opacity:1, y: 0, transition: { duration: 0.4 } }}
              exit={{opacity:0, y: "-80p%", transition: { duration: 0.4 } }}
            >
              I am a self-taught full-stack developer with a strong eye for
              delivering solutions that are geared towards optimum user
              experience. I write code, I make things work. I care about the
              craft of programming and believe in the transformative power of
              technology. <br /> <br />
              I'm always looking for new opportunities to grow my skills and
              work with new individuals. <span>Let's work together</span> and
              build solutions that solve real-world problems!
            </motion.p>

            <h5>Website Development</h5>
            <progress value="80" max="100"></progress>
            <h5>UI/UX Design</h5>
            <progress value="45" max="100"></progress>
            <h5>SEO</h5>
            <progress value="55" max="100"></progress>
          </motion.div>
           {/* my skills */}
          <div className="about-skills">
            <h4>
              MY <span>Skills</span>
            </h4>
            <motion.div className="skills" initial={{opacity:0, y: "80%" }}
              animate={{opacity:1, y: 0, transition: { duration: 0.4 } }}
              exit={{opacity:0, y: "80%", transition: { duration: 0.4 } }}>
              {/* html */}
              <div>
                <ImHtmlFive className="html icon" onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}/>
                <p>HTML</p>
              </div>
              {/* css */}
              <div>
                <ImCss3 className="css icon" onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}/>
                <p>CSS</p>
              </div>
              {/* javascript */}
              <div>
                <TbBrandJavascript className="js icon" onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}/>
                <p>JAVASCRIPT</p>
              </div>
              {/* jquery */}
              <div>
                <SiJquery className="jquery icon"onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave} />
                <p>JQUERY</p>
              </div>
              {/* sass */}
              <div>
                <SiSass className="sass icon" onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}/>
                <p>SASS</p>
              </div>
              {/* react */}
              <div>
                <SiReact className="react icon" onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}/>
                <p>REACT</p>
              </div>
              {/* rest api */}
              <div>
                <SiZapier className="api icon" onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}/>
                <p>REST API</p>
              </div>
              {/* json */}
              <div>
                <VscJson className="json icon" onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}/>
                <p>JSON</p>
              </div>
              {/* redux */}
              <div>
                <SiRedux className="redux icon" onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}/>
                <p>REDUX</p>
              </div>
              {/* bootstrap */}
              <div>
                <SiBootstrap className="bootstrap icon" onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}/>
                <p>BOOTSTRAP</p>
              </div>
              
              {/* git hub */}
              <div>
                <BsGithub className="icon" onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}/>
                <p>GIT HUB</p>
              </div>
              {/* photoshop */}
              <div>
                <SiAdobephotoshop className="ps icon"onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}/>
                <p>PHOTO SHOP</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
