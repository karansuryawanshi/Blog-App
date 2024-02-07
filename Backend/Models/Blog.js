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
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  creater: {
    type: mongoose.Schema.ObjectId,
    ref: "User", // name of database
  },
});

const UserModel = mongoose.model("Blog", Blog);
module.exports = UserModel;
