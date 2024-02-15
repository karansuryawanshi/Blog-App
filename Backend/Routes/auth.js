const express = require("express");
const router = express.Router();
const User = require("../Models/Auth");
const app = express();
const { getToken } = require("../utils/helpers");
const passport = require("passport");

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

  const token = await getToken(newUser);
  const userToReturn = {
    ...newUser.toJSON(),
    token,
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

  const token = await getToken(user.email, user);

  const userToReturn = { ...user.toJSON(), token };
  return res.status(200).json(userToReturn);
});

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  }
);

module.exports = router;
