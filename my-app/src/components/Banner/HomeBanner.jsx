import BannerImage from "../../images/background.png";

function HomeBanner() {
  return (
    <div className="flex flex-col lg:justify-end justify-center items-center relative p-5 bg-black text-white h-screen overflow-hidden font-rubik" style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      
      <div className="absolute inset-0 bg-[#000000a0]  pointer-events-none"></div>
    
    
    </div>
  );
}

export default HomeBanner;