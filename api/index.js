require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const jsonParser = bodyParser.json();
app.use(jsonParser);

const whitelist = ["http://localhost:3000/"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.get("/", (req, res) => res.send("TASK MANAGER APP"));

const taskRouter = require("./Routes/Taskroutes");
app.use(taskRouter);

const PASS = encodeURIComponent(process.env.MONGO_PASS);
const URI = process.env.MONGO_URI.replace('<db_password>',PASS);
console.log(URI)
const start = async (params) => {
  try {
    await mongoose.connect(
      URI
    );
    app.listen(3000, () => console.log("Server ready on port 3000."));
  } catch (error) {
    console.log(error);
  }
};

start();

module.exports = app;
