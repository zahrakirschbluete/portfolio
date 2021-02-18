import React from "react";
import {FiGithub, FiEye} from "react-icons/fi"
import { contains } from "jquery";

function Project(props) {

  return (


  <div className="row mb-5">
  <div className={`col-6 order-${props.order} `}>
      <h3>{props.title}</h3>
    <p>{props.description}</p>
<div className="row p-3">
<a className="a-custom col-6"><FiGithub className="svg-size"></FiGithub></a>

<a className="a-custom col-6"><FiEye className="svg-size"></FiEye></a>
</div>
</div>
    <div class="col-6">
<div style={{height: 290, width: 520, backgroundSize: 'cover', backgroundImage: `url("${props.image}")`}}></div>
</div>

</div>
  );

}

export default Project;