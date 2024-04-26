import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer"

function DisplayBlog() {
  const [blog, setBlog] = useState([]);
  const { blogtitle } = useParams();
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`https://tedx-ajayicrowtheru.onrender.com/blogs/${blogtitle}`) 
        setBlog([res.data]);
    };
    getPost();
  }, []);

  return (
    <div className="flex place-content-center flex-col">
      {blog.map((post) => {
        return (
          <div className=" flex place-content-center " >
            <div className="mt-10 w-[90%]">
              <div className="mb-4 md:mb-0 w-full mx-auto relative">
                <div className="lg:px-0 lg:flex lg:flex-col" key={post._id}>
                  <a
                    href="https://tedx-ajayicrowtheru.vercel.app/blog"
                    className="px-3 py-3 lg:w-[15%] w-[50%] text-center text-gray-100 bg-main-red flex items-center justify-center rounded"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Back
                  </a>

                  <div className="grid lg:grid-cols-2 items-center">
                    <div>
                      <h2 className="text-4xl font-semibold text-gray-800 leading-tight mt-4 font-rubik ">
                        {/* {post.title} */}
                      </h2>
                      <p className="py-2 text-main-red inline-flex items-center justify-center mb-2">
                        {new Date(post.createdAt).toDateString()}
                      </p>
                    </div>

                    <div className="flex py-2 items-center lg:flex-row-reverse">
                      <img
                        src={post.authorImage}
                        alt={post.authorImage}
                        className="h-20 w-20 rounded-md m-2 object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-700 text-md">
                          {post.author}
                        </p>
                        <p className="font-normal text-gray-600 text-sm">
                          {post.job}
                        </p>
                      </div>
                    </div>
                  </div>



                </div>

                <div className="flex">
                  <img
                    src={post.image}
                    alt={post.image}
                    className="w-full object-cover lg:rounded"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-12">
                <div className="px-4 lg:px-0 mt-12 leading-[2.2] tracking-[1px] text-gray-600 w-full text-balance break-words ">
                  <p className="pb-6">{post.desc}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}


      <Footer />

    </div>
  );
}

export default DisplayBlog;
