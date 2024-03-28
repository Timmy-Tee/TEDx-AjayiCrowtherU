import Nav from "../../components/NavBar/Nav";
import HomeBanner from "../../components/Banner/HomeBanner";
import About from "../../components/About Us/AboutUs";
import { home_details } from "../../data/about";
import Speakers from "../../components/Speakers/Speakers";
import Countdown from "../../components/Countdown/Countdown";
import Ticket from "../../components/Ticket/Ticket";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { cardio } from "ldrs";
cardio.register();

function Home() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setInterval(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loader ? (
        <div className="preloader">
          <l-cardio size="70" speed="1.3" color="#db0001"></l-cardio>
        </div>
      ) : (
        <div>
          <Nav />
          <HomeBanner />
          <About title={home_details.title} paragraph={home_details.text} />
          <Speakers />
          <Countdown />
          <Ticket />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
