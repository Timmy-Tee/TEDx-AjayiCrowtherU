import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import speakerData from "../../data/speakers";
import Icons from "../../components/Icons/Icons";
import Nav from "../../components/NavBar/Nav";
import Banner from "../../components/Banner/Banner";

function AboutSpeakers() {
  return (
    <div className="">
      <Nav />

      <Banner />

      <section className="bg-white ">
        <div className="grid p-[10px] grid-cols-1 lg:mx-0 gap-6 lg:max-w-none lg:grid-cols-2 place-content-center items-center">
          {speakerData.map((speaker) => {
            return (
              <div>
                {/* To be mapped */}
                <div
                  className="flex place-content-center items-center flex-col p-6  border rounded-lg "
                  key={speaker.key}
                >
                  <figure className=" flex flex-auto flex-col justify-between ">
                    <figcaption className="mb-5 flex xl:flex-row flex-col text-center items-center gap-x-6 space-y-5 lg:space-y-0">
                      <img
                        className="w-[350px] aspect-auto rounded-lg bg-gray-50"
                        src={speaker.Image}
                        alt={speaker.name}
                      />

                      <div className="text-base flex flex-col  place-content-center items-center">
                        <div className="font-semibold text-gray-900 font-rubik text-lg">
                          {speaker.name}
                        </div>
                        <div className="mt-1 text-gray-500 font-rubik">
                          {speaker.job}
                        </div>
                        <br />

                        <Icons
                          link1={speaker.instagram}
                          icon1=<FontAwesomeIcon icon={faInstagram} />
                          link2={speaker.linkedin}
                          icon2=<FontAwesomeIcon icon={faLinkedin} />
                          link3={speaker.twitter}
                          icon3=<FontAwesomeIcon icon={faTwitter} />
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