import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
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

          {

              /* If there is no instagram linkedin and twitter but there is facebook*/
              ((e.instagram === "" || !e.instagram) &&
          (e.linkedin === "" || !e.linkedin) &&
          (e.twitter === "" || !e.twitter)) &&
          e.facebook ? (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.facebook}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          ) :  

                 /* If there is no Twitter and Linkedin but there is facebook and instagram*/
                 (e.facebook && e.instagram ) && ((e.twitter === "" || !e.twitter) && (e.linkedin === "" || !e.linkedin)) ? (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.facebook}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          ) : 

                 /* If there is no Twitter and Instagram but there is facebook and linkedin*/
                 (e.facebook && e.linkedin ) && ((e.twitter === "" || !e.twitter) && (e.instagram === "" || !e.instagram)) ? (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.facebook}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          ) : 
                  /* If there is no Twitter but there is facebook, linkedin and instagram*/
                  e.facebook && (e.twitter === "" || !e.twitter) ? (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.facebook}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          ) : 

           

          /* If there is no instagram, linkedin and twitter*/
            (e.instagram === "" || !e.instagram) &&
          (e.linkedin === "" || !e.linkedin) &&
          (e.twitter === "" || !e.twitter) ?(
            <div className="flex p-3 space-x-3">
              
            </div>
          )
          :  
          
          
          /* If there is only linkedin */
          ( (e.linkedin) && ((e.instagram === "" || !e.instagram) && (e.twitter === "" || !e.twitter))) ? (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          ) : 
          
          /* If there is only twitter */
          ( (e.twitter) && ((e.instagram === "" || !e.instagram) && (e.linkedin === "" || !e.linkedin))) ? (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.twitter}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          ) : 
          
          /* If there is no twitter and linkedin but there is instagram*/
          ( (e.twitter === "" || !e.twitter) && (e.linkedin === "" || !e.linkedin)) ? (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          ) : 

            /* If there is no twitter but there is linkedin and instagram*/
            (e.twitter === "" || !e.twitter) ? (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          ) : 

          /* If there is no linkedin but there is instagram and twitter*/
          (e.linkedin === "" || !e.linkedin) ? (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.twitter}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>

            </div>
          ) : 

  

          /* If there is no instagram but there is linkedin and twitter*/
          (e.instagram === "" || !e.instagram) ? (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.twitter}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          ) : 

          /* If there is instagram and facebook but no twitter and linkedin */
           e.instagram && e.facebook && ((e.twitter === "" || !e.twitter) && (e.linkedin === "" || !e.linkedin) ) ? (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.facebook}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          ) : 
          
          (
            <div className="flex p-3 space-x-3">
              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.twitter}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a className="blur_bg hover:text-second-red hover:scale-[1.2] transition-all hover:bg-white w-[40px] h-[40px] rounded-full border border-white grid place-content-center " href={e.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
