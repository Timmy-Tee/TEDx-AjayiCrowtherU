import Banner from "../../components/Banner/Banner";
import BlogCard from "../../components/Cards/BlogCards";
import Nav from "../../components/NavBar/Nav";
import BlogImage from "../../images/dpe.jpg";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";

function Blog() {
  const [loader, setLoader] = useState(false);
  const [blogData, setBlogData] = useState([]);

  // Loader
  useEffect(() => {
    setLoader(true);
    setInterval(() => {
      setLoader(false);
    }, 2000);
  }, []);
  // Loader

  // Get Data
  useEffect(() => {
    const fetchData = async()=>{
      try {
        const res = await axios.get("/blogs/posts")
        setBlogData(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()

    console.log(blogData)
  }, []);

  return (
    <div>
      {/* { */}
      {/* loader ? (
            <div className="preloader">
              <l-cardio size="70" speed="1.3" color="#db0001"></l-cardio>
            </div>
          ) :
          ( */}
      <div>
        <Nav />
        <Banner image={BlogImage} />

        <div className="flex p-[20px]">
          <div className="mx-auto basis-full ">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
              {blogData.map((post) => {
                return (
                  <div>
                  <BlogCard
                    key={post._id}
                    id={post._id}
                    blogCoverPhoto={post.image}
                    authorImage={post.authorImage}
                    date={post.createdAt}
                    blogTitle={post.title}
                    blogPost={post.desc}
                    author={post.author}
                    job={post.job}
                  />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
      {/* ) */}

      {/* } */}
    </div>
  );
}

export default Blog;
