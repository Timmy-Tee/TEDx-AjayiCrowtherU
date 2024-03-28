import axios from "axios";
import { useEffect, useState } from "react";

function BlogCard(e) {
  return (
    <div className="flex ">
      <div className=" basis-[100%] ">
        <a
          href={`/displayBlog/${e.blogTitle}`}xz
          // key={e.id}
          className="flex flex-col items-start justify-between shadow-lg"
          target="_blank"
        >
          <div className="relative w-full">
            <img
              src={e.blogCoverPhoto}
              alt={e.blogCoverPhoto}
              className="aspect-[16/9] w-full  bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
          </div>

          <div className="max-w-xl  p-[20px] flex flex-col">
            <div className=" flex items-center gap-x-4 text-xs">
              <time dateTime={e.date} className="text-gray-500">
                {new Date(e.date).toDateString()}
              </time>
              <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              </p>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <p>
                  <span className="absolute inset-0" />
                  {e.blogTitle}
                </p>
              </h3>
              <p className="mt-2  text-sm leading-6 text-gray-600 ">
                {e.blogPost.substring(0, 230)}
              </p>
            </div>

            <div className="flex py-2 items-center ">
                      <img
                        src={e.authorImage}
                        alt={e.authorImage}
                        className="h-14 w-14 rounded-md m-2 object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-700 text-md">
                          {e.author}
                        </p>
                        <p className="font-normal text-gray-600 text-sm">
                          {e.job}
                        </p>
                      </div>
                    </div>
            {/* <div className="relative mt-8 flex items-center gap-x-4">
              <img
                src={e.authorImage}
                alt=""
                className="h-3 w-3 rounded-md m-2 object-cover"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <p>
                    <span className="absolute inset-0" />
                    {e.author}
                  </p>
                </p>
                <p className="text-gray-600">{e.job}</p>
              </div>
            </div> */}
          </div>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
