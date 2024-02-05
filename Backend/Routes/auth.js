const express = require("express");
const router = express.Router();
const User = require("../Models/Auth");
const e = require("express");
const app = express();

router.post("/register", async (req, res) => {
  const { firstname, lastname, email, password, username } = req.body;

  const user = await User.findOne({ email: email });
  if (user) {
    return res
      .status(403)
      .json({ error: "A user with this mail Id already exist" });
  }

  const userUserData = { firstname, lastname, email, password, username };
  const newUser = await User.create(userUserData);

  const userToReturn = {
    ...newUser.toJSON(),
  };
  return res.status(200).json(userToReturn);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(403).json({ err: "Invalid Credentials" });
  }
  console.log(user);

  const passwordVerification = await User.findOne({ password: password });
  if (!passwordVerification) {
    res.status(403).json({ err: "invalid Password" });
  }

  const userToReturn = { ...user.toJSON() };
  return res.status(200).json(userToReturn);
});

module.exports = router;
