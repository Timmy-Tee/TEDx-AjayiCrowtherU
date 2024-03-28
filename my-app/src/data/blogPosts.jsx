import axios from "axios";
import { useEffect, useState } from "react";

function DisplayBlog() {
  const [blogPosts, setblogData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((d) => {
        setblogData(d.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(blogPosts);
  return (
    <div>
      {blogPosts.map((post) => {
        return <p> {post.author} </p>;
      })}
    </div>
  );
}

export default DisplayBlog;
