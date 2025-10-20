import Icons from "../Icons/Icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="flex place-content-center relative items-center flex-col p-[50px] font-rubik text-center space-y-6">
      <p className="text-[20px]">
        “This independent TEDx event is operated under license from TED”
      </p>
       <Icons
                link1="https://www.instagram.com/tedxajayicu/"
                icon1=<FontAwesomeIcon icon={faInstagram} />
                link2="https://twitter.com/tedxajayicu"
                icon2=<FontAwesomeIcon icon={faTwitter} />
                link3="https://tedxajayicrowtheru.com.ng/tedxajayicu@gmail.com"
                icon3=<FontAwesomeIcon icon={faEnvelope} />
              />
      <p className="text-[15px] text-[#d62828]">
        {" "}
        All Rights Reserved. © 2024 TEDx Ajayi Crowther University.
      </p>
    </div>
  );
}

export default Footer;
