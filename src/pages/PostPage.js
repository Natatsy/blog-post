import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const PostPage = () => {
  const { postId } = useParams();
  const [postContent, setPostContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostContent = async () => {
      try {
        // Fetch the markdown file from the public directory
        const response = await fetch(`/posts/${postId}.md`);
        if (!response.ok) {
          throw new Error("Post not found");
        }
        const text = await response.text();
        setPostContent(text);
      } catch (err) {
        setError("Failed to load post content");
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
