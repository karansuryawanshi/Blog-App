import React, { useState } from "react";
import Login from "./routes/login";
import Signup from "./routes/Signup";
import Home from "./routes/Home.jsx";
import UploadBlog from "./routes/UploadBlog.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Tags from "./routes/Tags.jsx";
import Posts from "./routes/Posts.jsx";
import SingleBlog from "./routes/SingleBlog.jsx";
import { useCookies } from "react-cookie";
import "./output.css";
import LoggedOutComponent from "./routes/LoggedOutComponent.jsx";
import Category from "./routes/Catgory.jsx";
import Profile from "./routes/Profile.jsx";

const App = () => {
  const [cookies, setCookies] = useCookies(["token"]);
  // console.log(cookies.token);

  return (
    <BrowserRouter>
      {cookies.token ? (
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/uploadblog" element={<UploadBlog></UploadBlog>}></Route>
          <Route path="/tags" element={<Tags></Tags>}></Route>
          <Route path="/post" element={<Posts></Posts>}></Route>
          <Route path="/blog/:blogId" element={<SingleBlog />}></Route>
          <Route path="/category/:category" element={<Category />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/*" element={<Navigate to="/home" />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/home"
            element={<LoggedOutComponent></LoggedOutComponent>}
          ></Route>
          <Route path="/*" element={<Navigate to="/signup" />}></Route>
        </Routes>
      )}
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
