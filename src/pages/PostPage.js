import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const PostPage = () => {
  const { postId } = useParams();

  // Log the postId to check if it's correct
  console.log("Current postId:", postId);

  const [postContent, setPostContent] = useState("");
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const indexResponse = await fetch(
          `${process.env.PUBLIC_URL}/posts/index.json`
        ); // Fetch post metadata
        if (!indexResponse.ok) {
          throw new Error("Failed to load post metadata");
        }
        const postsData = await indexResponse.json();
        const currentPost = postsData.find((post) => post.slug === postId); // Match the slug
        setPost(currentPost);

        if (currentPost) {
          const postResponse = await fetch(
            `${process.env.PUBLIC_URL}/posts/${postId}.md`
          ); // Fetch markdown content
          if (!postResponse.ok) {
            throw new Error("Post content not found");
          }
          const text = await postResponse.text();
          setPostContent(text);
        }
      } catch (err) {
        setError("Failed to load post content");
      }
    };

    fetchPostData();
  }, [postId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="post-page bg-gray-50 py-12">
      <main className="container mx-auto px-3">
        <article className="bg-white p-12 rounded-lg shadow-xl max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
            {post ? post.title : "Post not found"}
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
