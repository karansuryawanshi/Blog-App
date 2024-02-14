const express = require("express");
const app = express();
const router = express.Router();
const Playlist = require("../Models/Blog");
const passport = require("passport");
const Blog = require("../Models/Blog");
const User = require("../Models/Auth");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;

    const {
      title,
      subtitle,
      category,
      image,
      video,
      description,
      date,
      creater,
    } = req.body;

    if (!title || !description || !category) {
      return res.status(301).json({ err: "Insufficient Data" });
    }

    const playlistData = {
      title,
      subtitle,
      category,
      image,
      video,
      description,
      date,
      creater: currentUser._id,
    };

    const playlist = await Playlist.create(playlistData);

    return res.status(200).json(playlist);
  }
);

router.get(
  "/get/:blogId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const username = req.params.blogId;
    // console.log(blogId);
    const blog = await Blog.findOne({ _id: username }).populate("creater");

    if (!blog) {
      return res.status(301).json({ err: "Invalid ID" });
    }
    return res.status(200).json(blog);
  }
);

router.get(
  "/get/blog/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const createrId = req.user._id;
    console.log(createrId);

    const blogs = await Blog.find({ creater: createrId });
    console.log(blogs);
    return res.status(200).json({ data: blogs });
  }
);

router.get(
  "/get/blog/:createrId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const createrId = req.params.createrId;
    console.log(createrId);
    const creater = await User.findOne({ _id: createrId });

    if (!creater) {
      return res.status(301).json({ err: "invalid artist ID" });
    }

    const blog = await Blog.find({ creater: createrId });
    return res.status(200).json({ data: blog });
  }
);

router.get(
  "/get/allblogs/home",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const allBlogs = await Blog.find({});
    return res.status(200).json({ data: allBlogs });
  }
);

router.get("/get/blogs/category/:category", async (req, res) => {
  // try {
  const category = req.params.category;
  const blogs = await Blog.find({ category });

  if (!blogs) {
    return res
      .status(404)
      .json({ error: "No blogs found for the given category" });
  }

  res.status(200).json({ data: blogs });
  // } catch (error) {
  //   console.error("Error retrieving blogs by category:");
  //   res.status(500).json({ error: "Internal server error" });
  // }
});
module.exports = router;
