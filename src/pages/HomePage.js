import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const indexResponse = await fetch(
          `${process.env.PUBLIC_URL}/posts/index.json` // Corrected URL
        );
        if (!indexResponse.ok) {
          throw new Error("Failed to load post metadata");
        }
        const postsData = await indexResponse.json();
        setPosts(postsData);
      } catch (err) {
        setError("Failed to load posts");
      }
    };

    fetchPostsData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-lightgray min-h-screen py-12 px-6 md:px-20">
      <header className="text-center">
        <h1 className="text-4xl font-serif text-darkgray mb-6">
          A place to share my thoughts and stories.
        </h1>
      </header>
      <main className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300"
              key={index}
            >
              <h2 className="text-2xl font-semibold text-darkgray">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-5">{post.excerpt}</p>
              <Link
                to={`/post/${post.slug}`} // Link to the post page using slug
                className="text-primary mt-4 inline-block hover:text-blue-500 hover:no-underline"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
