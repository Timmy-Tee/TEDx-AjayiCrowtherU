import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import speakerData from "../../data/speakers";
import Icons from "../../components/Icons/Icons";
import Nav from "../../components/NavBar/Nav";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../images/speakersbg.jpg";
import Cards from "../../components/Cards/Cards";

function AboutSpeakers() {
  return (
    <div className="">
      <Nav />

      <Banner image={BannerImage} />

      <section className="bg-white ">
        <div className="grid p-[10px] grid-cols-1 lg:mx-0 gap-6 lg:max-w-none lg:grid-cols-2 place-content-center items-center pre-wrap">
          {speakerData.map((speaker) => {
            return (
              <div>
                {/* To be mapped */}
                <div
                  className="flex place-content-center items-center flex-col p-6  border rounded-lg "
                  key={speaker.key}
                >
                  <figure className=" flex flex-auto flex-col justify-between ">
                    <figcaption className="mb-5 flex place-content-center xl:flex-row flex-col items-center gap-x-6 space-y-5 lg:space-y-0">
                      

                      <div className="lg:w-[50%] w-full grid place-content-center overflow-hidden rounded-3xl ">

                        <Cards
                          key={speaker.key}
                          image={speaker.Image}
                          name={speaker.name}
                          job={speaker.job}
                          instagram={speaker.instagram}
                          twitter={speaker.twitter}
                          linkedin={speaker.linkedin}
                          facebook={speaker.facebook}
                          tiktok={speaker.tiktok}
                        />
                      </div>
                    </figcaption>

                    <blockquote className="leading-[1.8] tracking-[0.6px] text-[#231f209d] break-keep">
                      <p>{speaker.about}</p>
                    </blockquote>
                  </figure>
                </div>
                {/* To be mapped */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default AboutSpeakers;
