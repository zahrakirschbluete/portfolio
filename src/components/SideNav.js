import React from "react";
import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi"

function SideNav() {
    return(
<div className="">
    <div className="position-fixed zindex-fixed bottom-left">
    <ul className="list-unstyled svg-size mb-4">
        <li className="a-glow"><FiGithub></FiGithub></li>
        <li className="a-glow"><FiLinkedin></FiLinkedin></li>
        <li className="a-glow"><FiMail></FiMail></li>
    </ul>
{/* <div className="vertical-line ml-1 bottom-left"></div> */}
</div>
<div className="position-fixed zindex-fixed bottom-right">
<div className=""><a className="a-glow text-decoration-none rotate-90" href="mailto:zahra.kirschblute@hotmail.com">zahra.kirschblute@hotmail.com</a></div>
{/* <div className="vertical-line ml-1"></div> */}
</div>
</div>
    )
}

export default SideNav;