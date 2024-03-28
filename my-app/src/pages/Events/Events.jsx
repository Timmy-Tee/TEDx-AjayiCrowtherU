import Banner from "../../components/Banner/Banner";
import EventCard from "../../components/Cards/EventCards";
import Nav from "../../components/NavBar/Nav";
import BannerImage from "../../images/event_image/forward.jpg";

function Events() {
  return (
    <div>
      <Nav />
      <Banner image={BannerImage} />
      <div className="grid mt-4 p-5">
        <h1 className="text-4xl text-center font-semibold mb-6 font-rubik text-main-red">
          Event Highlights
        </h1>

        <EventCard />
      </div>
    </div>
  );
}

export default Events;
