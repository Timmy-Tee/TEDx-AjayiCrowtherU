import BannerImage from "../../images/log.png";
import Crown from "../../images/specifics/assets1.png";
import Spline from '@splinetool/react-spline';

function HomeBanner() {
  return (
    <div className="flex flex-col lg:justify-end justify-center items-center relative p-5 bg-black text-white h-screen overflow-hidden font-rubik">
      {/* Spline as background - positioned absolutely to cover entire container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Spline scene="https://prod.spline.design/VzkmtiH670wOPE6V/scene.splinecode" />
      </div>
      
      {/* Subtle dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 z-[5] pointer-events-none"></div>
      <div className="w-[140px] h-[45px] bg-[#1e1d23] absolute bottom-3 right-[20px]"></div>
    
      {/* Crown image */}
     
      
      {/* "Own YOUR" text */}
      <div 
        className="tracking-[0px] lg:top-[150px] top-[30px] leading-[30px] text-center z-4 pointer-events-none select-none"
        style={{
          WebkitTextStroke: '1px black',
          textStroke: '1px black',
          textShadow: '0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,0.8)',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
        }}
      >
       <img 
        src={Crown}
        alt="Crown Images" 
        className="w-[90px] absolute top-[-40px] left-[-115px] z-4 pointer-events-none rotate-[-45deg]"
        style={{
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.8))'
        }}
      />
      <p className="font-[700] font-rubik text-[35px] ">

        Own Your
      </p>
      </div>
      
      {/* "STAGE" text */}
      <b 
        className="lg:text-[350px] text-[80px] font-[700] tracking-[20px] h-fit font-rubik z-4 pointer-events-none select-none leading-none"
        style={{
          WebkitTextStroke: '3px black',
          textStroke: '3px black',
          paintOrder: 'stroke fill',
          textShadow: '0 0 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.7), 4px 4px 8px rgba(0,0,0,0.8)',
          filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.6))'
        }}
      >
        STAGE
      </b>
    </div>
  );
}

export default HomeBanner;