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
  return res.render('index');
});

app.get('/api1/thing/:name', (req, res) => {
  const {name} = req.params

  return res.send(`hello url from .... ${name}`)
})

app.use("/", require("./routes/AuthenticateRoutes"));

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on http://localhost:${port}`.bgBlue);
});
