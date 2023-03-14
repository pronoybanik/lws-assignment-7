import React from "react";
import "./App.css";
import Navbar from "./componet/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddJobs from "./pages/AddJobs/AddJobs";
import LeftBar from "./componet/LeftBar/LeftBar";


function App() {
  return (
    <div className="App">
      <body>
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
            <LeftBar></LeftBar>

            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/addJobs" element={<AddJobs></AddJobs>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
