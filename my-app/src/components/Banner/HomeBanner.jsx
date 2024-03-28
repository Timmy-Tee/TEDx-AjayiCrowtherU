import BannerImage from "../../images/log.png";

function HomeBanner() {
  return (
    <div className="w-full h-[100vh]  flex">
      {/* Left Side */}
      <div className="left-side basis-6/12 bg-homeBanner bg-center bg-no-repeat bg-cover relative hidden sm:hidden lg:flex "></div>
      {/* Left Side */}

      {/* Right Side */}
      <div className="basis-full grid place-content-center bg-banner lg:basis-[60%] ">
        <img
          src={BannerImage}
          alt="Team Logo with African Face"
          className="lg:w-[650px] w-[350px]"
        />
      </div>
      {/* Right Side */}
    </div>
  );
}

export default HomeBanner;
