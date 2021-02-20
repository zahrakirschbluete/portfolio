import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function SideNav() {
  return (
    <div className="d-sidenav-none">
      <div className="position-fixed zindex-tooltip bottom-left">
        <ul className="list-unstyled svg-size mb-4">
          <li className="a-glow">
            <a href="https://github.com/zahrakirschbluete/" className="a-glow"><FiGithub className=""></FiGithub> </a>
          </li>
          <li className="a-glow">
          <a href="https://www.linkedin.com/in/zahra-kirschbl%C3%BCte-078b51134/" className="a-glow"><FiLinkedin className="mt-37px"></FiLinkedin></a>
          </li>
          <li className="a-glow">
          <a href="mailto:zahra.kirschblute@hotmail.com" className="a-glow"> <FiMail className="mt-37px"></FiMail></a>
          </li>
        </ul>
      </div>
      <div className="position-fixed zindex-fixed bottom-right">
        <div className="">
          <a
            className="a-glow text-decoration-none rotate-90"
            href="mailto:zahra.kirschblute@hotmail.com"
          >
            zahra.kirschblute@hotmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
