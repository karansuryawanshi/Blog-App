const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./Routes/auth");
const port = 8080;
const bodyParser = require("body-parser");
const blogRouter = require("./Routes/blog");
const passport = require("passport");
const User = require("./Models/Auth");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const cors = require("cors");

app.use(cors());

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "ThisKeyIsSupposeToBeSecret";

// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: secretKey,
// };

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    // Here you might query your database or perform other operations to find the user based on the JWT payload
    const user = await User.findOne({ _id: jwt_payload.identifier });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
);

app.use(passport.initialize());

app.use(bodyParser.json());
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
app.use("/blog", blogRouter);

app.listen(port, () => {
  console.log("app is running on port:- ", port);
});
