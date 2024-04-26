import Banner from "../../components/Banner/Banner";
import EventCard from "../../components/Cards/EventCards";
import Nav from "../../components/NavBar/Nav";
const BannerImage = "https://img.freepik.com/free-photo/3d-rendering-cinema_23-2150985270.jpg?t=st=1714091279~exp=1714094879~hmac=279ad3ffe094e0e194aeb233a99050da3df043d53b3477dfe6c9734c0c0326d5&w=740"

function Events() {
  return (
    <div>
      <Nav />
      <Banner image={BannerImage} />
        <EventCard />
    </div>
  );
}

export default Events;
