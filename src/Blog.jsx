import React, { useEffect, useState } from "react";
import axios from "axios";
import like from "./like.svg";
import comment from "./comment.svg";
import bookmark from "./bookmark.svg";
const Blog = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const email = localStorage.getItem("email");
  useEffect(()=>{
    console.log("myblogs",myBlogs)
  },[myBlogs])
  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const res = await axios.post("http://localhost:3000/blog", {
         email:email
        });
        setMyBlogs(res.data.data[0].blogs);
        console.log("hlo beer",res.data.data[0].blogs)
      } catch (err) {
        console.error("Error fetching blogs", err);
      }
    };
    console.log("useffect run")
   fetchMyBlogs();
  }, []);

  return (
    <div style={{ backgroundColor: "#09344c", minHeight: "100vh", padding: "20px",overflowY:"scroll",height:800 }}>
      <h1 style={{ color: "white", fontFamily: "roboto", textAlign: "center" }}>My Blogs</h1>
    
      {myBlogs.length === 0 ? (
        <p style={{ color: "white", textAlign: "center", fontFamily: "roboto" }}>
          You haven’t written any blogs yet.
        </p>
      ) : (
        myBlogs.map((blog, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#0e4967",
              margin: "20px auto",
              padding: "20px",
              borderRadius: "12px",
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
              color: "white",
              fontFamily: "roboto",
            }}
          >
            <div style={{ width: "60%" }}>
              <h2 style={{ marginBottom: 10 }}>{blog.title}</h2>
              <p style={{ fontSize: 16 }}>{blog.blogData[0]?.text}</p>
              <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                <img src={like} style={{ height: 20, width: 20, opacity: 0.7 }} />
                <img src={comment} style={{ height: 20, width: 20, opacity: 0.7 }} />
                <img src={bookmark} style={{ height: 20, width: 20, opacity: 0.6 }} />
              </div>
            </div>
            <div>
              <img
                src={blog.blogData[1]?.image}
                alt="blog visual"
                style={{ height: 180, borderRadius: "8px" }}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
