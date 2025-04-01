import React from "react";
import "./App.css";

const samples = Array.from({ length: 12 }, (_, i) => ({
  title: `시공 사례 ${i + 1}`,
  image: `https://via.placeholder.com/400x250?text=시공+샘플+${i + 1}`,
}));

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">호랭이 휀스</a>
          <ul className="nav-links">
            <li><a href="#services">서비스</a></li>
            <li><a href="#portfolio">시공 사례</a></li>
            <li><a href="#estimate">견적 문의</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-overlay">
          <h1>펜스 시공의 모든 것</h1>
          <p>믿고 맡기는 <strong>호랭이 휀스</strong></p>
        </div>
      </section>

      <section id="services" className="section container">
        <h2>주요 서비스</h2>
        <ul className="service-list">
          <li>각종 휀스 설치 (메쉬, 방음, 디자인 등)</li>
          <li>공장, 주택 외곽 시공</li>
          <li>방문 견적 및 상담 가능</li>
        </ul>
      </section>

      <section id="portfolio" className="section container">
        <h2>시공 사례</h2>
        <div className="grid">
          {samples.map((item, idx) => (
            <div key={idx} className="card">
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="estimate" className="section container">
        <h2>견적 문의</h2>
        <p>전화 또는 문자로 빠르게 견적을 받아보세요.</p>
        <div className="buttons">
          <a href="tel:01021373387" className="btn call">📞 전화하기</a>
          <a href="sms:01021373387" className="btn sms">💬 문자보내기</a>
        </div>
      </section>

      <div className="floating-buttons">
        <a href="tel:01021373387">📞</a>
        <a href="sms:01021373387">💬</a>
      </div>
    </div>
  );
}

export default App;