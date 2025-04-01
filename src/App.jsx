import React from "react";
import "./App.css";

const portfolioItems = [
  {
    title: "애견펜션 메쉬휀스 시공",
    image: "https://via.placeholder.com/400x250?text=시공+샘플1",
    description: "애견들이 마음껏 뛰어놀 수 있게 안전한 펜스 시공."
  },
  {
    title: "개인주택 합성목 가림막",
    image: "https://via.placeholder.com/400x250?text=시공+샘플2",
    description: "사생활 보호를 위한 튼튼한 가림막 설치."
  },
  {
    title: "공장 외곽 철망펜스 설치",
    image: "https://via.placeholder.com/400x250?text=시공+샘플3",
    description: "공장 경계 보호용 철망펜스 견고하게 시공."
  }
];

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1 style={{ fontSize: "3rem", textAlign: "center" }}>호랭이 휀스</h1>
      <p style={{ fontSize: "1.5rem", textAlign: "center", marginBottom: "3rem" }}>
        펜스 시공의 모든 것, 믿고 맡기는 <strong>호랭이 휀스</strong>
      </p>

      <section style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h2>주요 서비스</h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
          <li>✔ 각종 휀스 설치 (철망/방음/특수)</li>
          <li>✔ 공장 및 시설물 외곽 시공</li>
          <li>✔ 견적 및 방문 상담</li>
        </ul>
      </section>

      <section>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>시공 사례</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {portfolioItems.map((item, idx) => (
            <div key={idx} style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}>
              <img src={item.image} alt={item.title} style={{ width: "100%", height: "auto" }} />
              <div style={{ padding: "1rem" }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
