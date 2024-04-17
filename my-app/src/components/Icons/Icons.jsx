function Icons(e) {
  return (
    <div className="w-[90%] space-x-4 text-white flex items-center place-content-center">
      <a 
      id={e.display1}
        href={e.link1}
        className="p-[15px] flex rounded-[50px] hover:bg-white hover:text-main-red transition ease-in-out delay-200 bg-second-red "
      >
        {e.icon1}
      </a>
      <a 
      id={e.display2}
        href={e.link2}
        className="p-[15px] flex rounded-[50px] hover:bg-white hover:text-main-red transition ease-in-out delay-200 bg-second-red "
      >
        {e.icon2}
      </a>
      <a 
      id={e.display3}
        href={e.link3}
        className="p-[15px] flex rounded-[50px] hover:bg-white hover:text-main-red transition ease-in-out delay-200 bg-second-red "
      >
        {e.icon3}
      </a>
    </div>
  );
}

export default Icons;
