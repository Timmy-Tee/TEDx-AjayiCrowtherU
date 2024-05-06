
function BlogCard(e) {
  return (
    <div className="flex relative">
      <div className="w-full">
        <a
          href={`https://tedx-ajayicrowtheru.vercel.app/displayBlog/${e.blogTitle}`}
          key={e.id}
          className="flex flex-col items-start justify-between shadow-lg"
          target="_blank"
          rel="noreferrer"
        >
          <div className="relative w-full">
            <img
              src={e.blogCoverPhoto}
              alt={e.blogCoverPhoto}
              className="aspect-[16/9] w-full  bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
          </div>

          <div className=" w-full p-[20px] flex flex-col  relative ">
            <div className=" flex items-center gap-x-4 text-xs">
              <time dateTime={e.date} className="text-gray-500">
                {new Date(e.date).toDateString()}
              </time>
              <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              </p>
            </div>
            <div className="relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <p>
                  <span className="absolute inset-0" />
                  {e.blogTitle}
                </p>
              </h3>
              <p className="mt-2  text-sm leading-6 text-gray-600 break-all relative">
                {e.blogPost.substring(0, 150)+"..."}
              </p>
            </div>

            <div className="flex py-2 items-center space-x-3 ">

                      <div className="relative flex w-[70px] h-[70px] rounded place-content-center items-center overflow-hidden"> 
                      <img
                        src={e.authorImage}
                        alt={e.authorImage}
                        className="w-full h-full object-cover object-center"
                      />
                      </div>

                      <div>
                        <p className="font-semibold text-gray-700 text-md">
                          {e.author}
                        </p>
                        <p className="font-normal text-gray-600 text-sm">
                          {e.job}
                        </p>
                      </div>
                    </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
