const express = require("express");
const cors = require("cors");

const path = require("path");

require("dotenv").config({
  path: "./secret/.env",
});

require("colors");

require("./config/db");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.set("view engine", "ejs");

const public = path.join(__dirname, "views");
app.use(express.static(public));

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.use("/", require("./routes/AuthenticateRoutes"));

const port = process.env.PORT || 7000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on http://localhost:${port}`.bgBlue);
});
