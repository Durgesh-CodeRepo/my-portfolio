import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App({ uname }) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home uname={uname} />} />
        <Route path="/home" element={<Home uname={uname} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <h1 className="text-center text-danger mt-5">
              Invalid Credential 404 Not Found!
            </h1>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
