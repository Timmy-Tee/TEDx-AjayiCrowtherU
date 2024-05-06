import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import events from "../../data/events";
import schedules from "../../data/schedules";
import { ClockIcon } from '@heroicons/react/24/outline'   
import TextHeader from "../TextHeader/TextHeader";
import Button from "../Button/Button";
const form = "https://docs.google.com/forms/d/e/1FAIpQLSfNL8pYiIKLvbamNEjI6HWFkxDVyEHpYY3ssuZVY5Lpn22Aaw/viewform?usp=sf_link"

function EventCard() {
  return (
    <div className=" p-3 mt-5">
    <TextHeader main_header={"Event Schedule"} mini_header="Events" header/>
    <div className="lg:p-7 sm:p-3 mt-6 overflow-hidden lg:gap-4 gap-8 lg:grid-cols-2 sm:grid sm:grid-cols-1">
      {schedules.map((schedule) => (
          <div className="group flex flex-col lg:p-10 place-content-center lg:space-y-4 p-8 space-y-5 relative bg-[#ebedee] rounded-xl  hover:bg-second-red hover:text-white ease-in-out duration-300" key={schedule.title}>
    
              <div className="absolute rounded-bl-[100px] w-[100px] h-[100px] top-0 right-0 rounded-tr-xl bg-second-red text-white group-hover:bg-white group-hover:text-second-red grid place-content-center">
              <p className="text-[40px] relative -right-[10px] -top-[10px] font-rubik font-bold"> {schedule.id} </p>
              </div>

              <p className="text-second-red font-bold flex font-rubik group-hover:text-white"> <ClockIcon className="h-6 w-6 mr-2"/> {schedule.time} </p>
              <h1 className="lg:text-[35px] text-[27px] font-semibold font-rubik group-hover:text-white text-[#1c1f30]"> {schedule.title} </h1>
              <p > {schedule.description} </p>



          </div>
      ))}
    </div>
    </div>
  );
}

export default EventCard;
