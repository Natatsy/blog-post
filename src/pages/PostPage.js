import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const PostPage = () => {
  const { postId } = useParams();
  const [postContent, setPostContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the post content
        const response = await fetch(
          `${process.env.PUBLIC_URL}/posts/${postId}.md`
        );

        if (!response.ok) {
          throw new Error(`Error: Failed to fetch ${postId}.md`);
        }

        const content = await response.text();
        setPostContent(content); // Set the content to state
      } catch (err) {
        console.error("Error fetching markdown:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, [postId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="post-page bg-gray-50 py-12">
      <main className="container mx-auto px-3">
        <article className="bg-white p-12 rounded-lg shadow-xl max-w-3xl mx-auto">
          {/* Removed the <h1> title */}
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="prose lg:prose-xl"
          >
            {postContent || "Loading content..."}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
};

export default PostPage;
