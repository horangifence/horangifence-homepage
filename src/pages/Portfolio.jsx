import React from "react";

const samples = Array.from({ length: 12 }, (_, i) => ({
  title: `시공 사례 ${i + 1}`,
  image: `https://via.placeholder.com/400x250?text=시공+샘플+${i + 1}`,
}));

const Portfolio = () => (
  <section className="section container">
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
);

export default Portfolio;