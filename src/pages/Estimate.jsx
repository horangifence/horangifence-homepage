import React, { useState, useEffect } from "react";

const STORAGE_KEY = "estimatePosts";

const Estimate = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    address: "",
    message: ""
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setPosts(JSON.parse(stored));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/mjkyeqdq", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target)
    });

    const newPost = {
      ...form,
      date: new Date().toLocaleString()
    };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
    setForm({ name: "", phone: "", type: "", address: "", message: "" });
  };

  return (
    <section className="section container">
      <h2>견적 문의</h2>
      <form onSubmit={handleSubmit} className="estimate-form">
        <label>이름<input type="text" name="name" value={form.name} onChange={handleChange} required /></label>
        <label>연락처<input type="tel" name="phone" value={form.phone} onChange={handleChange} required /></label>
        <label>펜스 종류
          <select name="type" value={form.type} onChange={handleChange} required>
            <option value="">선택하세요</option>
            <option value="메쉬휀스">메쉬휀스</option>
            <option value="디자인휀스">디자인휀스</option>
            <option value="합성목휀스">합성목휀스</option>
            <option value="특수휀스">특수휀스</option>
          </select>
        </label>
        <label>현장 주소<input type="text" name="address" value={form.address} onChange={handleChange} required /></label>
        <label>설명<textarea name="message" rows="3" value={form.message} onChange={handleChange} placeholder="자유롭게 적어주세요" /></label>
        <button type="submit" className="btn-submit">견적 요청</button>
      </form>

      <div className="estimate-board">
        <h3>최근 견적 요청</h3>
        {posts.length === 0 ? (
          <p>아직 등록된 견적 요청이 없습니다.</p>
        ) : (
          <ul>
            {posts.map((post, idx) => (
              <li key={idx}>
                <div className="post-header">
                  <span className="post-number">{posts.length - idx}</span>
                  <div className="post-main">
                    <div className="post-title">
                      <strong>{post.name}</strong> · {post.type}
                    </div>
                    <div className="post-address">{post.address}</div>
                    <div className="post-message">{post.message}</div>
                  </div>
                  <div className="post-date">{post.date}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Estimate;