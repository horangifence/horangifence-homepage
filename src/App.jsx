import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>호랭이 휀스</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        펜스 시공의 모든 것, 믿고 맡기는 <strong>호랭이 휀스</strong>
      </p>
      <img
        src="https://via.placeholder.com/600x300?text=휀스+시공+사진"
        alt="펜스 시공 이미지"
        style={{ maxWidth: "100%", borderRadius: "12px", marginBottom: "2rem" }}
      />
      <h2>주요 서비스</h2>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
        <li>✔ 각종 휀스 설치 (철망/방음/특수)</li>
        <li>✔ 공장 및 시설물 외곽 시공</li>
        <li>✔ 견적 및 방문 상담</li>
      </ul>
      <button
        onClick={() => alert("문의 페이지는 준비 중입니다.")}
        style={{
          marginTop: "2rem",
          padding: "1rem 2rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "none",
          background: "#333",
          color: "white",
          cursor: "pointer",
        }}
      >
        문의하기
      </button>
    </div>
  );
}

export default App;
