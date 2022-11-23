import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { useCursourContext } from "./CursourContext";
// css styles
const Wrapper = styled.section`
  .footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-block: 2rem;
   flex-wrap: wrap;
    /* position: absolute;
    bottom: 1rem;
    left: 0; */
    
    gap: 20px;

    .copy-right {
      flex: 1 1 1;

      p {
        
       
        font-size: 1.1rem;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
      }
    }

    .social-icons {
      flex: 1 1 1;

      /* Giving margin to the right side of the social icons. */
      /* margin-right: 5rem; */

      a {
        position: relative;
        margin-left: 2rem;
        
        font-size: 1.5rem;

        /* hover */
        &:hover {
          transform: scale(1.5);

          /* insta */
          .insta {
            fill: #bc2a8d;
            transition: all 230ms ease-in;
          }
          /* linked in */
          .linkedin {
            fill: #0077b5;
            transition: all 230ms ease-in;
          }

          &::before {
            transform: scale(0);
            transition: all 230ms ease-in;
          }
        }
        /* a before */
        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 40px;
          height: 40px;
          top: -20%;
          left: -40%;
          border-radius: 100%;
          background: linear-gradient(45deg, rgb(32, 132, 219), #c648c8);
          z-index: -2;
          transition: all 230ms ease-in;
        }
      }
    }
  }
`;

const Footer = () => {
  const {MouseEnter,MouseLeave}=useCursourContext();
  return (
    <Wrapper>
      <div className="footer">
        <div className="copy-right">
          <p>&copy; Saikumar, {new Date().getFullYear()}</p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/saikumar90143" title="github">
            <AiFillGithub
              className="icon git"
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/saikumar-goud-051a01146"
            title="linkedin"
          >
            <AiFillLinkedin
              className="icon linkedin"
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
            />
          </a>
          <a
            href="https://www.instagram.com/ppl_calls_me_dsk/"
            title="instagram"
          >
            <AiFillInstagram
              className="icon insta"
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
            />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
