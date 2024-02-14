import React from "react";
import Login from "./routes/login";
import Signup from "./routes/Signup";
import Home from "./routes/Home.jsx";
import UploadBlog from "./routes/UploadBlog.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Tags from "./routes/Tags.jsx";
import Posts from "./routes/Posts.jsx";
import SingleBlog from "./routes/SingleBlog.jsx";

import "./output.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/uploadblog" element={<UploadBlog></UploadBlog>}></Route>
        <Route path="/tags" element={<Tags></Tags>}></Route>
        <Route path="/post" element={<Posts></Posts>}></Route>
        <Route path="/blog" element={<SingleBlog />}></Route>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Login></Login>
    //   <Signup></Signup>
    //   <Home></Home>
    //   <UploadBlog></UploadBlog>
    //   <Tags></Tags>
    //   <Posts></Posts>
    // </div>
  );
};

export default App;
