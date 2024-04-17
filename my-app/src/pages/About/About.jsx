import Banner from "../../components/Banner/Banner";
import Nav from "../../components/NavBar/Nav";
import AboutUs from "../../components/About Us/AboutUs";
import aboutContent from "../../data/about";
import Team from "../../components/Team/Team";
import TeamBannerImage from "../../images/about.jpg";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { cardio } from "ldrs";
cardio.register();

function About() {
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
          <Banner image={TeamBannerImage} />

          {aboutContent.map((content) => {
            return (
              <AboutUs
              key={content.key}
                title={content.title}
                paragraph={content.text}
                position={content.position}
                img={content.img}
              />
            );
          })}

          <Team />

          <Footer />
        </div>
      )}
    </div>
  );
}

export default About;
