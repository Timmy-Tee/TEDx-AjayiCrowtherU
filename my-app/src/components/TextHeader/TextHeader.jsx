function TextHeader(e) {
  return (
    <div className="relative flex place-content-center mt-2 text-center items-center p-[30px]">
      <p className={e.header ?  `header2 absolute lg:text-[5rem] text-[2.6rem] uppercase font-bold text-[transparent] font-rubik ` : `absolute header lg:text-[5rem] text-[4.2rem] uppercase font-bold text-[transparent] font-rubik`}>
        {e.main_header}
      </p>
      <h1 className={e.header ? `hidden`  : `relative uppercase text-[40px] font-extrabold font-rubik text-white`}>
        {e.mini_header}
      </h1>
    </div>
  );
}

export default TextHeader;
