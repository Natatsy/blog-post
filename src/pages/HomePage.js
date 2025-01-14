// src/pages/HomePage.js
import React from "react";

const HomePage = () => {
  const posts = [
    { id: 1, title: "First Post", slug: "first-post" },
    { id: 2, title: "Second Post", slug: "second-post" },
    { id: 3, title: "Third Post", slug: "third-post" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.slug}`} className="text-blue-500">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
