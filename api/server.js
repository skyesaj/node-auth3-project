const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

// routers
const authRouter = require("../routers/auth/authRouters");
const userRouter = require("../routers/users/userRouter");
const restricted = require("../api/middleware/resMiddleware");
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/user", restricted, userRouter);

server.get("/", (req, res) => {
  return res.send("Welcome to the API");
});

module.exports = server;
