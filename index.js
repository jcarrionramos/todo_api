const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const userRoutes = require("./routes/user.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// a middleware, maybe a good way to check the JWT
app.use("/", (req, res, next) => {
  console.log("A request for things received at " + Date.now());
  next();
});

app.use("/user", userRoutes);

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to Mongo database"))
  .catch((error) => console.error("Connection refused: ", error));

app.listen(3300);
