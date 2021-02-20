import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IoGameControllerOutline, IoCartOutline } from "react-icons/io5";
import { BiCameraMovie, BiHeart, BiStar} from "react-icons/bi";

function Footer() {
  return (
    <footer role="contentinfo" className="bg-custom-primary">
      <div class="footer__container">
        <section role="region">
          <div className="row w-50 mx-auto text-white text-center">
            <div className="col-12 col-md-4">
            <div>
              <IoCartOutline></IoCartOutline>
            </div>
              <div>
                <h6>
                  E-commerce lover
                </h6>
              </div>
              <div>
                <p className="very-tiny-text">Both as a customer as well as an employee at E-commerce companies!</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div>
                <IoGameControllerOutline></IoGameControllerOutline>
              </div>
              <div>
                <h6>Gamer</h6>
              </div>
              <div>
                <p className="very-tiny-text">My spare time mostly consists of playing Minecraft. Otherwise I <BiHeart></BiHeart> CS 1.6 as well.</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
            <div>
              <BiCameraMovie></BiCameraMovie>
            </div>
              <div>
                <h6>
                  Media Enthusiast
                </h6>
              </div>
              <div><p className="very-tiny-text">Currently obsessed with the series The Boys and Mandalorian <BiStar></BiStar></p></div>
            </div>
          </div>
        </section>
      </div>
      <section role="region" class="footer__bottom">
        <ul className="list-unstyled w-md-25 row m-0 mx-auto">
          <li className="color-custom col-4 p-0">
            <FiGithub></FiGithub>
          </li>
          <li className="color-custom col-4 p-0">
            <FiLinkedin></FiLinkedin>
          </li>
          <li className="color-custom col-4 p-0">
            <FiMail></FiMail>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
