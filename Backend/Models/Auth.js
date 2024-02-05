const mongoose = require("mongoose");

const User = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    private: true,
  },
  username: {
    type: String,
    require: true,
  },
});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;
