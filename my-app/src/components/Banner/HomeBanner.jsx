import BannerImage from "../../images/log.png";
import Crown from "../../images/specifics/assets1.png";

function HomeBanner() {
  return (
    <div className=" flex flex-col justify-end  items-center relative p-5 bg-black text-white h-[100vh]">
      <img src={Crown} alt="Crown Images" className="  w-[90px] absolute top-[110px] left-[110px]" />
         <div className=" text-[35px] tracking-[0px] absolute top-[150px]  leading-[30px] text-center font-rubik">
          Own 
          <br />
          YOUR
        </div>
      <b className=" text-[350px] font-[900] tracking-[20px] h-fit absolute   font-[Agile]">
        STAGE
      </b>
    </div>
  );
}

export default HomeBanner;
