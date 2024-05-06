import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlackNavlogo from "../../images/logo-black.png";
import WhiteNavLogo from "../../images/logo-white.png";
import { useState } from "react";
import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button"
const form = "https://docs.google.com/forms/d/e/1FAIpQLSfNL8pYiIKLvbamNEjI6HWFkxDVyEHpYY3ssuZVY5Lpn22Aaw/viewform?usp=sf_link"

function Nav() {
  const [navLogo, setLogo] = useState(WhiteNavLogo);

  const menuOpen = () => {
    document.getElementById("navLinks").style.display = "flex";
  };
  const menuClose = () => {
    document.getElementById("navLinks").style.display = "none";
  };

  const changeNav = () => {
    window.addEventListener("scroll", () => {
      let navBar = document.querySelector("nav");
      navBar.classList.toggle("stickyNav", window.scrollY > 40);

      if (window.scrollY > 40) {
        setLogo(BlackNavlogo);
      } else {
        setLogo(WhiteNavLogo);
      }
    });
  };

  changeNav();

  return (
    <div>
      <nav className="nav">
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
            <li >
              <a href={form}>Get Tickets</a> 
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
