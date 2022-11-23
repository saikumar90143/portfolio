import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { CursourProvider } from "./components/CursourContext";
const App = lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CursourProvider>
        <Suspense
          fallback={
            <h2
              style={{
                color: "black",
                position: "absolute",
                top: "50%",
                left: "50%",
                fontSize: "4rem",
                translate: "-50% -50%",
              }}
            >
              Loading...
            </h2>
          }
        >
          <App />
        </Suspense>
      </CursourProvider>
    </Router>
  </React.StrictMode>
);
