import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import events from "../../data/events";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function EventCard() {
  return (
    <div>
      <div className="flex flex-col md:grid grid-cols-12 text-gray-50 ">
        {events.map((event) => {
          return (
            <div className="flex md:contents ">
              <div className="col-start-2 col-end-3 hidden md:mx-auto relative lg:flex place-content-center items-center">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-main-red pointer-events-none "></div>
                </div>
                <div className="w-[50px] h-[50px]  grid place-content-center absolute top-1/2 -mt-3 rounded-full bg-main-red shadow text-center">
                  <p className="text-white text-xl font-rubik font-extrabold">
                    {event.key}
                  </p>
                </div>
              </div>

              <div className="bg-main-section col-start-3 col-end-12 p-6 rounded-xl my-4 mr-auto shadow-md w-full space-y-3">
                <h3 className="font-semibold text-[20px] lg:text-[30px] mb-1 font-rubik uppercase tracking-wide text-second-red ">
                  {event.title}
                </h3>
                <p className="leading-[1.7] tracking-[0.6px] break-keep text-[#231f20d3] ">
                  {event.text}
              <a href="https://tedxajayicrowtheru.com.ng" target="_blank" className="text-second-red"> See It All  <FontAwesomeIcon icon={faArrowRight} /> </a>
                </p>


                <p className="leading-tight text-[14px] text-justify w-full text-second-red font-rubik">
                  {event.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventCard;
