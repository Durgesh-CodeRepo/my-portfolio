import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const uname = prompt("What's your good name");

root.render(
  <React.StrictMode>
    <App uname={uname} />
  </React.StrictMode>
);
