require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var cors = require("cors");

// app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
const port = 3001;

//Routes
const ExpenseRoutes = require("./src/Routes/expense");
//DB CONNECTION
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE, {

  })
  .then(() => {
    console.log("DB CONNECTED");
  });
app.use("", ExpenseRoutes);

app.listen(port, () => console.log(`Example app listening on port port!`));
