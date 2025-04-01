import React from "react";

const blogPosts = [
  {
    title: "메쉬휀스 시공 현장 리뷰",
    image: "https://via.placeholder.com/400x225?text=Blog+1",
    date: "2024.11.10",
    url: "https://blog.naver.com/yourblog/1"
  },
  {
    title: "디자인 휀스로 주택 분위기 업!",
    image: "https://via.placeholder.com/400x225?text=Blog+2",
    date: "2024.12.02",
    url: "https://blog.naver.com/yourblog/2"
  },
  {
    title: "공장 외곽 특수휀스 설치",
    image: "https://via.placeholder.com/400x225?text=Blog+3",
    date: "2025.01.05",
    url: "https://blog.naver.com/yourblog/3"
  },
  {
    title: "합성목 휀스 설치 포인트",
    image: "https://via.placeholder.com/400x225?text=Blog+4",
    date: "2025.02.14",
    url: "https://blog.naver.com/yourblog/4"
  },
  {
    title: "펜스 시공 전 체크리스트",
    image: "https://via.placeholder.com/400x225?text=Blog+5",
    date: "2025.03.01",
    url: "https://blog.naver.com/yourblog/5"
  },
  {
    title: "펜스 시공 A to Z",
    image: "https://via.placeholder.com/400x225?text=Blog+6",
    date: "2025.03.22",
    url: "https://blog.naver.com/yourblog/6"
  }
];

const Blog = () => (
  <section className="section container">
    <h2>호랭이 휀스 블로그</h2>
    <div className="blog-grid">
      {blogPosts.map((post, idx) => (
        <a key={idx} href={post.url} target="_blank" rel="noopener noreferrer" className="blog-card">
          <img src={post.image} alt={post.title} />
          <div className="blog-content">
            <h4>{post.title}</h4>
            <span>{post.date}</span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Blog;