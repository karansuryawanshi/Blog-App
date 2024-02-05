const mongoose = require("mongoose");

const Blog = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  subtitle: {
    type: String,
    require: false,
  },
  category: {
    type: String,
    require: false,
  },
  image: {
    type: String,
    require: false,
  },
  video: {
    type: String,
  },
  Description: {
    type: String,
    require: true,
  },
  Date: {
    type: Date,
    require: true,
  },
  creater: {
    type: mongoose.Schema.ObjectId,
    ref: "User", // name of database
  },
});

const UserModel = mongoose.model("Blog", Blog);
module.exports = UserModel;
