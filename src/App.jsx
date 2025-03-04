import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import ProductListning from "./component/ProductListning";
import Footer from "./component/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="Appscrip-task-vivek/" element={<ProductListning />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
