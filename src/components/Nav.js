import React from "react";
import resume from "../assets/CV-Zahra_Kirschbluete.pdf"


function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top menu">
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>


    <div class="navbar-collapse collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav text-right text-md-left mt-2 mt-lg-0 ml-auto">
            <li class="nav-item mr-5">
                <a class="nav-link" href="#skills"><span className="color-custom">01.</span> <span className="text-light">Skills</span></a>
            </li>
            <li class="nav-item mr-5">
                <a class="nav-link text-light" href="#projects"><span className="color-custom">02.</span> <span className="text-light">Projects</span></a>
            </li>
            <li class="nav-item mr-5">
                <a class="nav-link text-light" href="#contact"><span className="color-custom">03.</span> <span className="text-light">Contact</span></a>

            </li>
      
            <li class="nav-item active mr-5 nav-btn-color">
                <a class="nav-link  text-light btn btn-outline-custom btn-md-inline" href={resume} target="_blank" rel='noopener noreferrer'>Resume</a>
            </li>
        </ul>

    </div>
</nav>
  );
}

export default Nav;