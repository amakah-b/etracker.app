// Requirements
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const { PORT, BASE_URL, DB_URL } = process.env;
const Mongo = require("./config/mongo.config");

//  Instantiations
const app = express();
app.use(cors());
app.use(express.json());

// Requiring these routes
const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");

// to use these files
app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(process.env.PORT || 3000, async () => {
  await Mongo(DB_URL);
  console.log(`Server is running on ${BASE_URL} ${PORT}`);
});
