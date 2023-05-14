const express = require("express");
const app = express();

const userRouter = require("./routes/users");
app.use("/users", userRouter)

const showRouter = require("./routes/shows");
app.use("/shows", showRouter)

module.exports = app;