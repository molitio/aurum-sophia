import React from "react";
import ReactDOM from "react-dom";
import { AurumSophia } from "../components/AurumSophia";
import { App } from "./_components/app";

ReactDOM.hydrate(
  <React.StrictMode>
    <AurumSophia />
  </React.StrictMode>,
  document.getElementById("root")
);
