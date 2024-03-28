import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Cards(e) {
  return (
    <div>
      <div className="relative">
        <img
          className="aspect-[14/16] w-full object-cover"
          src={e.image}
          alt="User"
        />
        <div className="card absolute bottom-0 w-full p-1 lg:p-3 md:p-3 text-white ">
          <h3 className="text-lg leading-8 tracking-tight  mt-2 font-medium font-rubik text-[20px]">
            {e.name}
          </h3>
          <p className="text-base leading-7 font-rubik">{e.job}</p>

          <div className="flex p-3 space-x-3">
            <a href={e.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href={e.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>


            <a href={e.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
