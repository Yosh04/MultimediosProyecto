import React from "react";
import { BsFacebook , BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const IconsLeft = () => {
  return (
    <div class="social-links left ">
      <ul class=" listIconsHorizontal">
        <li class="social">
          <a
            class="sm-col"
            href="https://www. .com/starwarsla/?brand_redir=169299103121699"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook  className="iconSize" />
          </a>
        </li>
        <li class=" social">
          <a
            class="sm-col"
            href="https://www.instagram.com/starwars/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="iconSize" />
          </a>
        </li>
        <li class="social">
          <a
            class="sm-col"
            href="https://www.youtube.com/user/starwars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube className="iconSize" />
          </a>
        </li>
        <li class="social">
          <a
            class="sm-col"
            href="https://twitter.com/starwars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter className="iconSize" />
          </a>
        </li>
        <li class="social">
          <div class="d-flex justify-content-center align-items-center">
          <span className="separator"></span> 
          <a
              class="social-icon-kids"
              href="https://www.starwarskids.com/ iconSize"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default IconsLeft;
