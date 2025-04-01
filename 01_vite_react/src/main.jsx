import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

const mujheCHipkalo = " extra";

function DemoFunc() {
  return <p>Hahahah {mujheCHipkalo}</p>; // {} => Evaluated Expressions
}

// const demoReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Visit Google!!",
// };

const moreElement = <h1>qwerty ytrew</h1>;

const demoReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Clicccck me!!!!!!!!!!",
  mujheCHipkalo
);

createRoot(document.getElementById("root")).render(moreElement);
