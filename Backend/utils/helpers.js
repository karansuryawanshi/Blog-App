// const jwt = require("jsonwebtoken");

// exports.getToken = async (_id) => {
//   const token = jwt.sign({ _id }, "ThisKeyIsSupposeToBeSecret", {
//     expiresIn: "3d",
//   });
//   return token;
// };
// module.exports = exports;

// const jwt = require("jsonwebtoken");

// exports = {};
// exports.getToken = async (user) => {
//   const token = jwt.sign(
//     { identifier: user.email },
//     "ThisKeyIsSupposeToBeSecret"
//   );
//   return token;
// };
// module.exports = exports;

const jwt = require("jsonwebtoken");

exports = {};
exports.getToken = async (email, user) => {
  const token = jwt.sign(
    { identifier: user._id },
    "ThisKeyIsSupposeToBeSecret"
  );
  return token;
};
module.exports = exports;

// const jwt = require("jsonwebtoken");

// exports.getToken = async (_id) => {
//   const token = jwt.sign({ _id }, "ThisKeyIsSupposeToBeSecret", {
//     expiresIn: "3d",
//   });
//   return token;
// };
// module.exports = exports;
