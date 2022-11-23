import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useCursourContext } from "./CursourContext";
import styled from "styled-components";

const Wrapper = styled.section`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  box-shadow: 0px 0px 5px gray;
  background-color: black;
  display: grid;
  grid-template-columns: 0.2fr 0.6fr 0.2fr;
  align-items: center;
  column-gap: 5px;
  grid-auto-flow: column;
z-index: 999;
  /* logo */
  .logo {
    span {
      font-size: max(1.5rem,3vw);
      font-weight: bolder;
      color: transparent;
      /* text-shadow: 0px 1px 1px white; */
      background: linear-gradient(90deg,white, rgb(32, 132, 219));
      background-clip: text;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      
    }
  }
  /* contact details */
  .contact-details {
    color: gray;
    a {
      
      color: rgb(32, 132, 219);
      &:hover{
        text-decoration: underline;
      }
    }
    span {
      margin-inline: 10px;
    }
  }

  /* navbar */
  .navbar {
    
    
    width: 0;
    background-color: #29292a;
  
    ul{
           display :none ;
         }
  }

  .nav-mobile {
    position: absolute;
    top: 0;
    right: 0;
    
    width: 400px;
    background-color: #29292a;
    height: 100vh;
     transition: 0.3s ease;
    ul {
      display: block;
      margin-top: 100px;

      li {
        margin-top: 50px;
        .nav-link {
          color: gray;
          letter-spacing: 1px;
          font-size: 1.5rem;
        }
        .active {
          color: white;
        }
      }
    }
  }

  /* toggle */
  .menu-toggle {
    z-index: 999;
    position: fixed;
    top: 30px;
    right: 50px;


    .toggle {
      color: gray;
      font-size: 1.8rem;
      &:hover{
        color: rgb(32, 132, 219);
        fill: rgb(32, 132, 219);
      }
    }
    
  }
`;
const Header = () => {
  const {MouseEnter,MouseLeave}=useCursourContext();
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const boxvarinats = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
      },
    },
  };
  const listvarinats = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      staggerChildren: 0.2,
    },
  };

  /* An array of objects. Each object has a path and name property. */
  const array = [
    { path: "/", name: "Home" },
    { path: "/whatido", name: "What I Do" },
    { path: "/about", name: "About" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <>
      <Wrapper className="header">
        {/* logo */}

        <div className="logo" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
          <NavLink to="/">
            <span>SaiKumar</span>
          </NavLink>
        </div>
        <div className="contact-details" >
        Mobile:  <a href="tel:9014386620"onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>+91 9014386620</a>
          <span>/</span>
         Email: <a href="mailto:saikumar.dudala@gmail.com"onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
            saikumar.dudala@gmail.com
          </a>
        </div>
        {/* Creating a navbar with links to the pages. */}
        <div className={menu ? "nav-mobile" : "navbar"}>
          <motion.ul
            variants={boxvarinats}
            initial="hidden"
            animate={show ? "visible" : 0}
            onClick={() => setMenu(false)}
            
          >
            {array.map((elem,id) => {
              return (
                <motion.li variants={listvarinats} key={id}>
                  <NavLink className="nav-link" to={elem.path}>
                    {elem.name}
                  </NavLink>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
        <div className="menu-toggle" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
          {menu ? (
            <AiOutlineClose
              className="toggle open"
              onClick={() => {
                setMenu(!menu);
                setShow(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                setMenu(!menu);
                setShow(true);
              }}
              className="toggle close"
            />
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
