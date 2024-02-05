const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./Routes/auth");
const port = 8080;
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // Add this line to parse JSON bodies

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/Blog?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.log("error While connecting to mongo!");
  });

app.get("/", (req, res) => {
  res.send("Hello Buddy");
});

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log("app is running on port:- ", port);
});
