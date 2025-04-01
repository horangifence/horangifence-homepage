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
  // 견적 요청 폼 및 게시판 상태
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [fenceType, setFenceType] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      name,
      phone,
      fenceType,
      address,
      message,
    };

    // 게시판에 새로운 요청 추가 (최신 요청이 위로)
    setRequests([newRequest, ...requests]);

    // 폼스프리로 폼 데이터 전송 (이메일 알림)
    fetch("https://formspree.io/f/mjkyeqdq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRequest)
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
    <div className="App">
      {/* 네비게이션 바 */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#home">홈</a></li>
          <li><a href="#services">서비스</a></li>
          <li><a href="#portfolio">시공 사례</a></li>
          <li><a href="#estimate">견적 요청</a></li>
        </ul>
      </nav>

      {/* 히어로 섹션 - 배경 이미지와 타이틀 */}
      <section id="home" className="hero-section">
        <div className="hero-overlay">
          <h1>호랭이 휀스</h1>
          <p>펜스 시공의 모든 것, 믿고 맡기는 호랭이 휀스</p>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section id="services" className="services-section">
        <h2>주요 서비스</h2>
        <ul>
          <li>✔ 각종 휀스 설치 (철망/방음/특수)</li>
          <li>✔ 공장 및 시설물 외곽 시공</li>
          <li>✔ 견적 및 방문 상담</li>
        </ul>
      </section>

      {/* 시공 사례 섹션 */}
      <section id="portfolio" className="portfolio-section">
        <h2>시공 사례</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="portfolio-card">
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 견적 요청 섹션 (폼 + 게시판) */}
      <section id="estimate" className="estimate-section">
        <h2>견적 요청</h2>
        <form onSubmit={handleSubmit} className="estimate-form">
          <div className="form-group">
            <label>이름</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력하세요" required />
          </div>
          <div className="form-group">
            <label>연락처</label>
            <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="전화번호를 입력하세요" required />
          </div>
          <div className="form-group">
            <label>펜스 종류</label>
            <select name="fenceType" value={fenceType} onChange={(e) => setFenceType(e.target.value)} required>
              <option value="">선택해주세요</option>
              <option value="메쉬펜스">메쉬펜스</option>
              <option value="디자인펜스">디자인펜스</option>
              <option value="합성목펜스">합성목펜스</option>
              <option value="특수펜스">특수펜스</option>
            </select>
          </div>
          <div className="form-group">
            <label>현장 주소</label>
            <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="현장 주소를 입력하세요" required />
          </div>
          <div className="form-group">
            <label>설명</label>
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="요청 사항을 자유롭게 적어주세요" />
          </div>
          <button type="submit" className="submit-btn">견적 요청하기</button>
        </form>

        {/* 견적 요청 게시판 */}
        <div className="request-board">
          <h3>최근 견적 요청들</h3>
          {currentRequests.length === 0 ? (
            <p>현재 견적 요청이 없습니다.</p>
          ) : (
            currentRequests.map((req, idx) => (
              <div key={idx} className="request-card">
                <h4>{req.name}님</h4>
                <p>연락처: {req.phone}</p>
                <p>펜스 종류: {req.fenceType}</p>
                <p>현장 주소: {req.address}</p>
                <p>{req.message}</p>
              </div>
            ))
          )}
          {/* 페이지네이션 */}
          <div className="pagination">
            {Array.from({ length: Math.ceil(requests.length / requestsPerPage) }, (_, index) => (
              <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? "active-page" : ""}>
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
