import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlackNavlogo from "../../images/logo-black.png";
import WhiteNavLogo from "../../images/logo-white.png";
import { useEffect, useState } from "react";
import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";

function Nav() {
const [navLogo, setLogo] = useState(WhiteNavLogo);

  const menuOpen = () => {
    document.getElementById("navLinks").style.display = "flex";
  };
  const menuClose = () => {
    document.getElementById("navLinks").style.display = "none";
  };

  useEffect(() => {
    const handleScroll = () => {
      let navBar = document.querySelector("nav");
      if (navBar) {
        navBar.classList.toggle("stickyNav", window.scrollY > 40);

        if (window.scrollY > 40) {
          setLogo(BlackNavlogo);
        } else {
          setLogo(WhiteNavLogo);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="nav font-rubik flex items-center justify-between px-5 lg:px-20 py-4 lg:py-6">
      <a href="/">
        <img src={navLogo} alt="" className="w-[230px] lg:w-[350px]" />
      </a>

        <div id="navLinks" className="navLinks">
          <FontAwesomeIcon
            icon={faMultiply}
            className="text-white hidden text-[45px] cursor-pointer absolute top-10 right-10"
            id="iconmultiply"
            onClick={menuClose}
          />
          <ul>
            <li>
              <a href="/" className="link">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/events">Event</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="text-white hidden text-[25px] cursor-pointer"
          id="icon"
          onClick={menuOpen}
        />

      </nav>
    </div>
  );
}

export default Nav;
