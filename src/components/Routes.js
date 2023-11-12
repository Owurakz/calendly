import React from "react";
import Navigationbar from "./Navigationbar";
import Body from "./Body";
import Itembody from "./Itembody";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Routin() {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route path="/body" element={<Body />} />
        <Route path="/itembody" element={<Itembody />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routin;
