import React from "react";
import Login from "./routes/login";
import Signup from "./routes/Signup";
import Home from "./routes/Home.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./output.css";
const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/signup" element={<Signup></Signup>}></Route>
    //     <Route path="/login" element={<Login></Login>}></Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      <Home></Home>
    </div>
  );
};

export default App;
