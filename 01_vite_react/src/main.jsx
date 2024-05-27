import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function Ajay(){
    return(
        <div>
            <h1>Hi Ajay!</h1>
        </div>
    )
}

// const ReactElement1 = {
//     type: "a",
//     props: {
//       href: "https://google.com",
//       target: "_blank",
//     },
//     children: "Visit to Google",
//   };

// const ReactElement1 = React.createElement("p",{}," lorem ipsum")

let vari=" Hellllllllllllllllllllo"
//  vari=if(true){hell0}

const ReactElement1 = React.createElement("a",{ href: "https://google.com",target: "_blank",},"Go to Google",vari)

const ReactElement2 = <a href="https://youtube.com" target="_blank">Go to YT</a>

// ReactDOM.createRoot(document.getElementById("root")).render(ReactElement1);
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
