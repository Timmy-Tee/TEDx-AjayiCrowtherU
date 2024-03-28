function Banner(e) {
  return (
    <div className="banner relative w-full h-[65vh] flex place-content-center items-center">
      <img
        src={e.image}
        alt="banner"
        className="flex object-cover object-center w-full h-full"
      />
    </div>
  );
}

export default Banner;
