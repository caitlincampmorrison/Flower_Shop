const app = require("express").Router();

app.use("/flowers", require("./flower"));

module.exports = app;
