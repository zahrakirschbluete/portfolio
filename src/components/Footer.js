import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer role="contentinfo" className="w-50 mx-auto text-center p-5">
      <ul className="list-unstyled row svg-size">
        <li className="color-custom col-4">
          <FiGithub></FiGithub>
        </li>
        <li className="color-custom col-4">
          <FiLinkedin></FiLinkedin>
        </li>
        <li className="color-custom col-4">
          <FiMail></FiMail>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
