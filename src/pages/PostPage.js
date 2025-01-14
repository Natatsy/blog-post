import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// Dynamically import markdown content from src directory
import firstPostContent from "../posts/first-post.md";
import secondPostContent from "../posts/second-post.md";

const PostPage = () => {
  const { postId } = useParams();
  const [postContent, setPostContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostContent = () => {
      if (postId === "first-post") {
        setPostContent(firstPostContent);
      } else if (postId === "second-post") {
        setPostContent(secondPostContent);
      } else {
        setError("Post not found");
      }
    };

    fetchPostContent();
  }, [postId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="post-page bg-gray-50 py-12">
      <main className="container mx-auto px-3">
        <article className="bg-white p-12 rounded-lg shadow-xl max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
            {postId.replace("-", " ").toUpperCase()}
          </h1>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="prose lg:prose-xl"
          >
            {postContent}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
};

export default PostPage;
