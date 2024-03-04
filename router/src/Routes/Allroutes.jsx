import React from "react";
import Home from "../Components/Home";
import { Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Contact from "../Components/Contact";
import PageNotFound from "../Components/PageNotFound";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
