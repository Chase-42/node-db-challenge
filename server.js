const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("./projects/projects-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h2> Welcome to the Node-DB-Challenge server! <h3>");
});

server.use("/api/projects", projectsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong 🙁"
  });
});

module.exports = server;
