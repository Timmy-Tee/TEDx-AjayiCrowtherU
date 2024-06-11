import Header from "../TextHeader/TextHeader";
import Logo_Black_Red from "../../images/logo-black.png"

function Countdown(){
    return(
        <div className="p-[50px] flex flex-col text-main-red place-content-center text-center">
             <div className="grid place-content-center mb-[40px]">
            <img src={Logo_Black_Red} alt="" className=" w-[450px]"/>
             </div>

                <div className="flex flex-col place-content-center items-center space-y-4">
                        <p className="text-[30px] font-rubik">Check Out Pictures From The Event</p>
                        <a
                    href="/gallery"
                    className="px-3 py-3 lg:w-[15%] w-[50%] text-center text-gray-100 bg-main-red flex items-center justify-center rounded"
                  >
                    Gallery
                  </a>
                </div>

        </div>
    )
}
export default Countdown;