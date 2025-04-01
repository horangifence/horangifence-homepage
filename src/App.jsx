import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Estimate from "./pages/Estimate";
import Blog from "./pages/Blog"; // ✅ 블로그 페이지 import 추가
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/blog" element={<Blog />} /> {/* ✅ 블로그 라우터 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
