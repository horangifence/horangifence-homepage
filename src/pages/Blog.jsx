import React, { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://rss.blog.naver.com/hanbada100.xml")
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          const filtered = data.items.slice(0, 8).map(post => ({
            title: post.title,
            link: post.link,
            date: post.pubDate.split(" ")[0],
            thumbnail:
              post.thumbnail ||
              post.enclosure?.link ||
              "https://via.placeholder.com/400x225?text=Blog"
          }));
          setPosts(filtered);
        }
      })
      .catch(err => {
        console.error("블로그 불러오기 실패:", err);
      });
  }, []);

  return (
    <section className="section container">
      <h2>호랭이 휀스 블로그</h2>
      <div className="blog-grid">
        {posts.length === 0 ? (
          <p>블로그 글을 불러오는 중이거나 아직 게시글이 없습니다.</p>
        ) : (
          posts.map((post, idx) => (
            <a key={idx} href={post.link} target="_blank" rel="noopener noreferrer" className="blog-card">
              <img src={post.thumbnail} alt={post.title} />
              <div className="blog-content">
                <h4>{post.title}</h4>
                <span>{post.date}</span>
              </div>
            </a>
          ))
        )}
      </div>
    </section>
  );
};

export default Blog;