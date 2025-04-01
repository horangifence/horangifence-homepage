import React, { useState } from "react";
import "./App.css";

const portfolioItems = [
  {
    title: "애견펜션 메쉬펜스 시공",
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
  // 견적 요청 폼 상태
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [fenceType, setFenceType] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(3); // 한 페이지당 3개의 요청 표시

  // 견적 요청 폼 제출 처리 (폼스프리 연동)
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      name,
      phone,
      fenceType,
      address,
      message,
    };

    // 요청을 게시판 목록에 추가 (최신 요청이 위에 오도록)
    setRequests([newRequest, ...requests]);

    // 폼스프리 URL로 폼 데이터 전송 (이메일 알림용)
    fetch("https://formspree.io/f/mjkyeqdq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRequest),
    })
      .then((response) => {
        if (response.ok) {
          alert("견적 요청이 제출되었습니다! 감사합니다.");
        } else {
          alert("이메일 전송에 실패했습니다. 다시 시도해주세요.");
        }
      })
      .catch((error) => {
        alert("서버에 문제가 발생했습니다. 다시 시도해주세요.");
      });

    // 폼 초기화
    setName("");
    setPhone("");
    setFenceType("");
    setAddress("");
    setMessage("");
  };

  // 페이징 처리
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* 네비게이션 바 */}
      <nav style={{ background: "#333", padding: "1rem", position: "sticky", top: 0, zIndex: 100 }}>
        <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", margin: 0, padding: 0 }}>
          <li style={{ margin: "0 1rem" }}>
            <a href="#home" style={{ color: "white", textDecoration: "none" }}>홈</a>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <a href="#services" style={{ color: "white", textDecoration: "none" }}>서비스</a>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <a href="#portfolio" style={{ color: "white", textDecoration: "none" }}>시공 사례</a>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <a href="#estimate" style={{ color: "white", textDecoration: "none" }}>견적 요청</a>
          </li>
        </ul>
      </nav>

      {/* 홈 섹션 */}
      <section id="home" style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>호랭이 휀스</h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "3rem" }}>
          펜스 시공의 모든 것, 믿고 맡기는 <strong>호랭이 휀스</strong>
        </p>
      </section>

      {/* 서비스 섹션 */}
      <section id="services" style={{ padding: "2rem", textAlign: "center" }}>
        <h2>주요 서비스</h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
          <li>✔ 각종 휀스 설치 (철망/방음/특수)</li>
          <li>✔ 공장 및 시설물 외곽 시공</li>
          <li>✔ 견적 및 방문 상담</li>
        </ul>
      </section>

      {/* 시공 사례 섹션 */}
      <section id="portfolio" style={{ padding: "2rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>시공 사례</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {portfolioItems.map((item, idx) => (
            <div key={idx} style={{ border: "1px solid #ccc", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              <img src={item.image} alt={item.title} style={{ width: "100%", height: "auto" }} />
              <div style={{ padding: "1rem" }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 견적 요청 섹션 */}
      <section id="estimate" style={{ padding: "2rem", background: "#f1f1f1", borderRadius: "12px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>견적 요청</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label>이름</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력하세요"
              required
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>연락처</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="전화번호를 입력하세요"
              required
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>펜스 종류</label>
            <select
              name="fenceType"
              value={fenceType}
              onChange={(e) => setFenceType(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            >
              <option value="">선택해주세요</option>
              <option value="메쉬펜스">메쉬펜스</option>
              <option value="디자인펜스">디자인펜스</option>
              <option value="합성목펜스">합성목펜스</option>
              <option value="특수펜스">특수펜스</option>
            </select>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>현장 주소</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="현장 주소를 입력하세요"
              required
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>설명</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="요청 사항을 자유롭게 적어주세요"
              style={{ width: "100%", padding: "0.5rem", height: "150px", marginTop: "0.5rem" }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "1rem",
              backgroundColor: "#333",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            견적 요청하기
          </button>
        </form>

        {/* 견적 요청 게시판 */}
        <div style={{ marginTop: "3rem" }}>
          <h3>최근 견적 요청들</h3>
          {currentRequests.length === 0 ? (
            <p>현재 견적 요청이 없습니다.</p>
          ) : (
            currentRequests.map((req, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#fff",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <h4>{req.name}님</h4>
                <p>연락처: {req.phone}</p>
                <p>펜스 종류: {req.fenceType}</p>
                <p>현장 주소: {req.address}</p>
                <p>{req.message}</p>
              </div>
            ))
          )}
          {/* 페이지네이션 */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            {Array.from({ length: Math.ceil(requests.length / requestsPerPage) }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                style={{
                  padding: "0.5rem 1rem",
                  margin: "0 0.2rem",
                  border: "1px solid #ccc",
                  background: currentPage === index + 1 ? "#333" : "#fff",
                  color: currentPage === index + 1 ? "white" : "#333",
                  cursor: "pointer"
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

