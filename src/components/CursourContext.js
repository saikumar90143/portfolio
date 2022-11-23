import React from "react";
import { createContext, useState, useEffect, useContext } from "react";

const CursourContext = createContext();

const CursourProvider = ({ children }) => {
  const [cursorpos, setCursorpos] = useState({
    x: 0,
    y: 0,
  });

  const [changebg, setChangebg] = useState("default");
  useEffect(() => {
    const move = (e) => {
      setCursorpos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  });

  const CursorVariants = {
    default: {
      x: cursorpos.x - 13,
      y: cursorpos.y - 13,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    text: {
      width: "80px",
      height: "80px",
      x: cursorpos.x - 40,
      y: cursorpos.y - 40,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const MouseEnter = () => {
    setChangebg("text");
  };
  const MouseLeave = () => {
    setChangebg("default");
  };
  return (
    <CursourContext.Provider
      value={{ CursorVariants, changebg, MouseEnter, MouseLeave }}
    >
      {children}
    </CursourContext.Provider>
  );
};

const useCursourContext = () => {
  return useContext(CursourContext);
};

export { useCursourContext, CursourProvider };
