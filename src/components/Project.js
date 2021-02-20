import React from "react";
import { FiGithub, FiEye } from "react-icons/fi";
import wejournal from "../assets/wejournal.PNG";
import schnack from "../assets/schnack3.png";

function Project(props) {
  return (
    <div className="row mb-5">
      <div
        className={`col-12 col-lg-6 mt-lg-3 order-${props.order} order-md`}
      >
        <h3>{props.title}</h3>
        <p><i>{props.stack}</i></p>
        <p>{props.description}</p>
        <div className="row p-3 text-center">
          <div  className="a-custom col-6 cursor-default">
          <a href={props.github} className="a-custom" target="_blank">
            <FiGithub className="svg-size"></FiGithub>
          </a>
          </div>
<div  className="a-custom col-6 cursor-default"> 
          <a href={props.demo} className="a-custom" target="_blank">
            <FiEye className="svg-size"></FiEye>
          </a>
        </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 mt-lg-3">
        <img className="w-100" src={props.image} />
      </div>
    </div>
  );
}

export default Project;
