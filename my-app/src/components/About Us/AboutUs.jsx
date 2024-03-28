import Next_Black_Red from "../../images/specifics/Black and Red.png";
import Lady_dancing from "../../images/specifics/pngwing.com (14).png";
import Man_sitting from "../../images/specifics/pngwing.com (15).png";

function About(e) {
  return (
    <div className="bg-main-section flex place-content-center items-center flex-col relative lg:p-[50px] sm:p-[20px]">
      <div className="lg:mb-0 mb-[150px]">
        <img
          src={Lady_dancing}
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
          <h1 className="font-rubik text-[40px] uppercase text-text-header font-bold">
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
          src={Man_sitting}
          alt=""
          className="w-[102px] absolute p-[10px] bottom-[10px] right-[10px]"
        />
      </div>
    </div>
  );
}

export default About;
