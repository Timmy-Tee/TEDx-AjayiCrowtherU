import Next_Black_Red from "../../images/OYSLogo3.png";
import Assets1 from "../../images/specifics/assets1.png"

function About(e) {
  return (
    <div className="bg-main-section flex place-content-center items-center flex-col relative lg:p-[50px] sm:p-[20px]">
      <div className="lg:mb-0 mb-[150px]">
        <img
          src={Assets1}
          alt="Dancing"
          className="w-[102px] absolute p-[10px] left-[10px] top-[10px] "
        />
      </div>

      <div className="lg:w-[75%] w-full p-[10px] relative">
        <div id={e.position}>
          <img
            id={e.img}
            src={Next_Black_Red}
            alt="Next Images Black And Red"
            className="w-[160px]"
          />
          <h1 className="font-rubik lg:text-[40px] text-[35px] uppercase text-black font-bold">
            {e.title}
          </h1>
        </div>

        <br />
        <p className="leading-[2.3] tracking-[0.6px] text-[#231f20] break-keep">
          {e.paragraph}
        </p>

        <br />
      </div>

      <div className="lg:mb-0 mb-[90px] border">
        <img
          src={Assets1}
          alt=""
          className="w-[102px] absolute p-[10px] bottom-[10px] right-[10px]"
        />
      </div>
    </div>
  );
}

export default About;
