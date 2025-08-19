// src/pages/Show.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const show = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const blog = state?.blog;
  const author = state?.author;

  if (!blog || !author) {
    return (
      <div style={{ padding: 20, backgroundColor: "#09344c", color: "white", height: "100vh" }}>
        <h2>Invalid access or no blog data</h2>
        <button onClick={() => navigate("/")} style={{ padding: 10, marginTop: 20 }}>
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily:'roboto',backgroundColor: "#09344c", color: "white", minHeight: "100vh", padding: 30 }}>
      <h1>{blog.title}</h1>
      <p>By: {author}</p>
      <div style={{ marginTop: 20 }}>
        {blog.blogData.map((block, idx) => (
          <div key={idx} style={{ marginBottom: 20 }}>
            {block.text && <p>{block.text}</p>}
            {block.image && (
              <img
                src={block.image}
                alt="blog visual"
                style={{ maxWidth: "100%", borderRadius: 10, marginTop: 10 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default show;
