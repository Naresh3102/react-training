import "./App.css";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Param from "./components/Param";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} caseSensitive />
          {/* <Route path="/product" element={}>
          <Route path="/:id/edit" element={} />
          </Route> */}
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/:productId" element={<Param />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
