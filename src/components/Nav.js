import React from "react";


function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top menu">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>


    <div class="navbar-collapse collapse show" id="navbarTogglerDemo03">
        <ul class="navbar-nav text-right mt-2 mt-lg-0 ml-auto">
            <li class="nav-item mr-5">
                <a class="nav-link text-light" href="https://github.com/zahrakirschbluete" target="_blank">01. Skills</a>
            </li>
            <li class="nav-item mr-5">
                <a class="nav-link text-light" href="https://www.linkedin.com/in/zahra-kirschbl%C3%BCte-078b51134/" target="_blank">02. Projects</a>
            </li>
            <li class="nav-item mr-5">
                <a class="nav-link text-light" href="CV-zahra_kirschbluete.pdf" target="_blank">03. Contact</a>

            </li>

            <li class="nav-item active mr-5 nav-btn-color">
                <a class="nav-link  text-light btn btn-outline-custom" href="#projects">Resume</a>
            </li>
        </ul>

    </div>
</nav>
  );
}

export default Nav;