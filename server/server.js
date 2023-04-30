const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hello world");
});

app.listen(3000);
