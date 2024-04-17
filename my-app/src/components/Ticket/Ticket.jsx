import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo_white_red from "../../images/logo-white.png";
import Button from "../Button/Button";
import Icons from "../Icons/Icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const form = "https://docs.google.com/forms/d/e/1FAIpQLSfNL8pYiIKLvbamNEjI6HWFkxDVyEHpYY3ssuZVY5Lpn22Aaw/viewform?usp=sf_link"


function Ticket() {
  return (
    <div className="ticket relative w-full bg-ticketBanner bg-center bg-cover bg-no-repeat h-[100vh] flex place-content-center items-center">
      <div className="relative flex max-w-3xl flex-col items-center text-center ">
        <img
          src={Logo_white_red}
          alt="Logo"
          className="w-[540px] lg:w-[1020px]"
        />

        <Button text="Get Ticket" link={form} />

        <br />

        <Icons
          link1="https://www.instagram.com/tedxajayicu/"
          icon1=<FontAwesomeIcon icon={faInstagram} />
          link2="https://twitter.com/tedxajayicu"
          icon2=<FontAwesomeIcon icon={faTwitter} />
          link3="https://tedxajayicrowtheru.com.ng/tedxajayicu@gmail.com"
          icon3=<FontAwesomeIcon icon={faEnvelope} />
        />
      </div>
    </div>
  );
}

export default Ticket;
