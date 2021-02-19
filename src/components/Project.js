import React from "react";
import { FiGithub, FiEye } from "react-icons/fi";
import wejournal from "../assets/wejournal.PNG";
import schnack from "../assets/schnack3.png";

function Project(props) {
  return (
    <div className="row mb-5">
      <div
        className={`col-12 col-md-6 col-lg-6 mt-lg-3 order-${props.order} order-sm`}
      >
        <h3>{props.title}</h3>
        <p><i>{props.stack}</i></p>
        <p>{props.description}</p>
        <div className="row p-3">
          <a className="a-custom col-6">
            <FiGithub className="svg-size"></FiGithub>
          </a>

          <a className="a-custom col-6">
            <FiEye className="svg-size"></FiEye>
          </a>
        </div>
      </div>
      <div class="col-12 col-md-6 mt-lg-3">
        <img className="w-100" src={props.image} />
      </div>
    </div>
  );
}

export default Project;
