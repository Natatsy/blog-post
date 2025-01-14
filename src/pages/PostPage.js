import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import marked from "marked";

const PostPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    // For simplicity, using static content, but you can read a .md file dynamically
    const fetchPost = async () => {
      const response = await fetch(`/posts/${slug}.md`);
      const text = await response.text();
      setContent(marked(text));
    };

    fetchPost();
  }, [slug]);

  return (
    <div className="p-6">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostPage;
