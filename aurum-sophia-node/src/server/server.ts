import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "../client/_components/app";
import { AurumSophia } from "../components/AurumSophia";

const server = express();
const context = {
  uiPort: 3000,
};

server.set("view engine", "ejs");
console.log(__dirname);
server.set("views", path.join(__dirname, "views"));

server.use("/", express.static(path.join(__dirname, "static")));

const manifest = fs.readFileSync(
  path.join(__dirname, "static/manifest.json"),
  "utf-8"
);

const assets = JSON.parse(manifest);

server.get("/", (req, res, next) => {
  const aurum = React.createElement(AurumSophia);
  const component = ReactDOMServer.renderToNodeStream(aurum);
  res.render("client", { assets, component });
});

server.listen(context.uiPort, () => {
  console.log(`Server running on /:${context.uiPort}`);
});
