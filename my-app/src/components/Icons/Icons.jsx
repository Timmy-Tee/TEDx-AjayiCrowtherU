function Icons(e) {
  return (
    <div className="w-[90%] space-x-4 text-white flex items-center place-content-center">
      <a
        href={e.link1}
        className="p-[20px] flex rounded-[50px] hover:bg-white hover:text-black transition ease-in-out delay-200 bg-second-red hover:border hover:border-second-red"
      >
        {e.icon1}
      </a>
      <a
        href={e.link2}
        className="p-[20px] flex rounded-[50px] hover:bg-white hover:text-black transition ease-in-out delay-200 bg-second-red hover:border hover:border-second-red"
      >
        {e.icon2}
      </a>
      <a
        href={e.link3}
        className="p-[20px] flex rounded-[50px] hover:bg-white hover:text-black transition ease-in-out delay-200 bg-second-red hover:border hover:border-second-red"
      >
        {e.icon3}
      </a>
    </div>
  );
}

export default Icons;
