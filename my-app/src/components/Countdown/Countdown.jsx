import Header from "../TextHeader/TextHeader";
import Logo_Black_Red from "../../images/logo-black.png"
import Counter from "./Counter";

function Countdown(){
    return(
        <div className="p-[50px] flex flex-col text-main-red place-content-center text-center">
            <Header 
                mini_header="Countdown To" 
             />

             <div className="grid place-content-center mb-[40px]">
            <img src={Logo_Black_Red} alt="" className=" w-[450px]"/>
             </div>

            <Counter />
        </div>
    )
}
export default Countdown;