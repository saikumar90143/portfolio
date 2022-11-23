import React from "react";
import styled from "styled-components";
import { useCursourContext } from "./CursourContext";
import { motion } from "framer-motion";
//css styles
const Wrapper = styled.section`
  height: 100vh;

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
    left: -80px;
  }

  .contact-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: auto;

    /* info */
    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      h2 {
        font-size:max(3vw,2rem);
        span {
          color: rgb(32, 132, 219);
        }
      }

      a {
        font-size: 1.5rem;
      }
    }

    /* contact form */
    .contact-form {
      h2 {
        margin-block: 2rem;
        span {
          color: rgb(32, 132, 219);
        }
      }
      form {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        row-gap: 2rem;
        width: 100%;
        .name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          input {
            flex: 1 1 15rem;
          }
        }
        .subject {
          width: 100%;
          input {
            width: 100%;
          }
        }
        input {
          background-color: #29292a;
          color: rgb(181, 170, 170);
          width: 15rem;
          height: 2.5rem;
          border: none;
          outline: none;
          &::placeholder {
            letter-spacing: 2px;
          }
        }
        textarea {
          background-color: #29292a;
          color: rgb(181, 170, 170);
          resize: none;
          width: 100%;
          border: none;
          outline: none;
          &::placeholder {
            letter-spacing: 2px;
            font-size: 1rem;
          }
        }
        /* submit button */
        .submit {
          background-color: rgba(32, 132, 219);
          font-size: 1rem;
          font-weight: bold;
          letter-spacing: 1px;
        }
      }
    }
  }
`;
const Contact = () => {
  const { MouseEnter, MouseLeave } = useCursourContext();
  const boxvarinats = {
    initial: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.4,
      },
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <>
      <Wrapper>
        <motion.h2
          className="overlay"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 0.15, scale: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, scale: 0.4,  }}
        >
          Contact me
        </motion.h2>

        <motion.div
          className="contact-page"
          variants={boxvarinats}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* left side */}
          <div className="info">
            <h2>
              <span>Hyderabad,</span>India
            </h2>
            <a
              href="mailto:saikumar.dudala@gmail.com"
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
            >
              saikumar.dudala@gmail.com
            </a>
            <a
              href="tel:9014386620"
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
            >
              +91 9014386620
            </a>
          </div>
          {/* right side */}
          <div className="contact-form">
            <h2>
              Contact <span>us</span>
            </h2>
            <form action="https://formspree.io/f/mnqrovyv" method="POST">
              <div className="name">
                <input
                  type="text"
                  name="username"
                  required
                  autoComplete="off"
                  placeholder="Name*"
                />
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                  placeholder="Email*"
                />
              </div>
              <div className="subject">
                <input type="text" placeholder="Subject(optional)" />
              </div>
              <textarea
                required
                autoComplete="off"
                placeholder="Message"
                cols="50"
                rows="10"
                name="message"
              ></textarea>
              <input type="submit" value="SUBMIT" className="submit" />
            </form>
          </div>
        </motion.div>
      </Wrapper>
    </>
  );
};

export default Contact;
