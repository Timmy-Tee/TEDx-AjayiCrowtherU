function TextHeader(e) {
  return (
    <div className="relative flex place-content-center text-center items-center p-[30px]">
      <p className="absolute header lg:text-[5rem] text-[4.2rem] uppercase font-bold text-[transparent] font-rubik">
        {e.main_header}
      </p>
      <h1 className="relative uppercase text-[40px] font-extrabold font-rubik">
        {e.mini_header}
      </h1>
    </div>
  );
}

export default TextHeader;
