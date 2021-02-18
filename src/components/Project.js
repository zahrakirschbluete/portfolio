import React from "react";
import wejournal from "../assets/wejournal.PNG"
import {FiGithub, FiEye} from "react-icons/fi"

function Project(props) {

  return (


  <div className="row">
  <div className={`col-6 order-${props.order} `}>
      <h3>{props.title}</h3>
    <p>{props.description}</p>
<div className="row p-3">

<a className="a-custom col-6"><FiGithub className="svg-size"></FiGithub></a>

<a className="a-custom col-6"><FiEye className="svg-size"></FiEye></a>
</div>
</div>
    <div class="col-6">
<img src={wejournal} className="project-img-size"/>
</div>

</div>
  );

}

export default Project;