import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogAuthorJob, setAuthorJob] = useState("");
  const [blogDesc, setBlogDesc] = useState("");
  const navigate = useNavigate()

  const getValue = (e) => {
    setBlogAuthor(e.target.value);
    setBlogTitle(e.target.value);
    setBlogDesc(e.target.value);
    setAuthorJob(e.target.value);
  };

  const submitPost = async () => {
    try {
      await axios
        .post("/blogs/upload", {
          blogAuthor,
          blogTitle,
          blogDesc,
          blogAuthorJob,
        })
        .then(() => {
          navigate("/blog")
        });
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="p-4 flex items-center place-content-center">
      <form
        enctype="multipart/form-data"
        action="/blogs/upload"
        method="post"
        className="flex basis-[90%] overflow-hidden flex-col space-y-9 relative"
      >
        {/* Email */}
        <div className="">
          <div className="flex justify-between">
            <label
              htmlFor="author"
              className="font-rubik block text-md font-medium leading-6 text-gray-900"
            >
              Author
            </label>
          
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="author"
              id="author"
              className="block w-[100%] rounded-sm outline-none text-gray-900 p-3 shadow-sm ring-1 ring-gray-300 focus:ring-2  focus:ring-main-color sm:text-sm sm:leading-6"
              placeholder="Ransom Testing"
              onChange={getValue} required
            />
          </div>
        </div>
        {/* Email */}


        {/* Email */}
        <div className="">
          <div className="flex justify-between flex-col">
            <label
              htmlFor="authorPicture"
              className="font-rubik block text-md font-medium leading-6 text-gray-900"
            >
              Author Picture
            </label>
            <label
                  htmlFor="authorPicture"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-main-red focus-within:outline-none focus-within:ring-2 focus-within:ring-main-red focus-within:ring-offset-2 hover:text-main-red w-[100%] border px-5 py-5 text-center border-dashed"
                >
                  <span className="text-md">Upload a Picture</span>
                  <input
                    id="authorPicture"
                    name="authorPicture"
                    type="file"
                    className=""
                    onChange={getValue} required

                  />
                </label>
          </div>
        </div>  
        {/* Email */}


        {/* Email */}
        <div className="">
          <div className="flex justify-between">
            <label
              htmlFor="job"
              className="font-rubik block text-md font-medium leading-6 text-gray-900"
            >
              Author Occupation
            </label>
          
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="authorJob"
              id="job"
              className="block w-[100%] rounded-sm outline-none text-gray-900 p-3 shadow-sm ring-1 ring-gray-300 focus:ring-2  focus:ring-main-color sm:text-sm sm:leading-6"
              placeholder="Students | Developer | Engineer"
              onChange={getValue} required
            />
          </div>
        </div>
        {/* Email */}

        {/* Email */}
        <div className="">
          <div className="flex justify-between">
            <label
              htmlFor="title"
              className="font-rubik block text-md font-medium leading-6 text-gray-900"
            >
              Blog Title
            </label>
          
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="blogtitle"
              id="title"
              className="block w-[100%] rounded-sm outline-none text-gray-900 p-3 shadow-sm ring-1 ring-gray-300 focus:ring-2  focus:ring-main-color sm:text-sm sm:leading-6"
              placeholder="Issues of Life"
              onChange={getValue} required
            />
          </div>
        </div>
        {/* Email */}

        {/* Email */}
        <div className="">
          <label
            htmlFor="comment"
            className="font-rubik block text-md font-medium leading-6 text-gray-900"
          >
            Blog Details
          </label>
          <div className="mt-2">
            <textarea
              rows={4}
              name="blogDesc"
              id="comment"
              className="block w-[100%] rounded-sm outline-none text-gray-900 p-3 shadow-sm ring-1 ring-gray-300 focus:ring-2  focus:ring-main-color sm:text-sm sm:leading-6"
              placeholder="Enter Your Blog Details Here"
              onChange={getValue} required
            />
          </div>
        </div>
        {/* Email */}

        {/*  */}
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Cover photo
          </label>

          <div className="mt-2 flex rounded-lg border border-dashed border-gray-900/25 ">
            <div className="grid text-center w-full">
              <div className=" flex text-sm leading-6 text-gray-600 basis-[70%]">
                <label
                  htmlFor="coverPhoto"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-main-red focus-within:outline-none focus-within:ring-2 focus-within:ring-main-red focus-within:ring-offset-2 hover:text-main-red w-[100%] px-5 py-10 "
                >
                  <span className="text-md">Upload a file</span>
                  <input
                    id="coverPhoto"
                    name="coverPhoto"
                    type="file"
                    className=""
                    onChange={getValue} required

                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <input
          type="submit"
          value="Submit"
          className=" bg-second-red p-12-50 rounded-md hover:bg-text-header text-white transition ease-in-out delay-20 cursor-pointer"
          onSubmit={submitPost}
        />
      </form>
    </div>
  );
}

export default CreateBlog;
