const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(process.env.APP_NAME);
});
app.get("/test", (req, res) => {
  res.send("testza");
});

app.listen(3000);
