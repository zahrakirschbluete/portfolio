import React from "react";
import wejournal from "../assets/wejournal.PNG"
import Project from "./Project"
import projectlist from '../assets/projectlist.json'

function Projects() {
  return (
 
<div className="container pr-5 pl-5 pt-3 mx-auto">
<h3 class="mb-3 fw-light display-4">PROJECTS</h3>
  <Project title = {projectlist.schnack.title} description = {projectlist.schnack.description} order={projectlist.schnack.order} image={projectlist.schnack.image} ></Project>
  <Project title = {projectlist.wejournal.title} description = {projectlist.wejournal.description} order={projectlist.wejournal.order} image={projectlist.wejournal.image} ></Project>
</div>
  );
}

export default Projects;