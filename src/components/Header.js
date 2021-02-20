import React from "react";
import profilePicture from '../assets/zahra.PNG'
import Particles from 'react-particles-js';
import {RiGameFill} from 'react-icons/ri';
import {BsDot} from 'react-icons/bs'



function Header() {
  return (
 <div className="particles-header p-0">
           <div className="position-absolute text-center p-4 w-100 top-7 text-white">
         
         <div>
             <img className="rounded-circle mb-2 profile-photo" src={profilePicture}/>
         </div>
         <div className="">
             <h1>Zahra Kirschblüte</h1>
         <h2 className="h1">Full Stack Developer</h2>
         <RiGameFill/>
    <BsDot/>
    <BsDot/>
    <BsDot/>
         <p>Solving problems, one task at a time.</p>

         <div className="row">
    
         </div>
         </div>
     </div>
     {/* <div className="row position-absolute text-center p-4 w-lg-50 top-7">
         
         <div className="col-6"> 
             <img className="rounded-circle mb-2 profile-photo" src={profilePicture}/>
         </div>
         <div className="col-6"><h1>Zahra Kirschblüte</h1>
         <h2>Full Stack Developer</h2>
         <p>Solving problems, one task at a time.</p>
         </div>
     </div> */}
<Particles
    params={{
	    "particles": {
            "number": {
                "value": 80
            },
            "color": {
                "value": "#f9f3f4"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 1,
                    "color": "#ccc"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true
            },
            "size": {
                "value": 2
            },
            "line_linked": {
                "enable": true,
                "distance": 110
            },
            "move": {
                "enable": true,
                "speed": 1
            }
        }
	}} />

    </div>
 
  );
}

export default Header;