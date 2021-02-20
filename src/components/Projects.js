import React from "react";
import Project from "./Project"
import projectlist from '../assets/projectlist.json'
import wejournal from "../assets/wejournal.PNG"
import schnack from "../assets/schnack3.png"

function Projects() {
  return (
 
<div className="container pr-5 pl-5 pt-3 mx-auto" id="projects">
<h3 class="mb-4 fw-light display-4">PROJECTS</h3>
  <Project title = {projectlist.schnack.title} stack={projectlist.schnack.stack} description = {projectlist.schnack.description} order={projectlist.schnack.order} github={projectlist.schnack.githublink} demo={projectlist.schnack.demolink} image={schnack}></Project>
  <Project title = {projectlist.wejournal.title} stack={projectlist.wejournal.stack} description = {projectlist.wejournal.description} order={projectlist.wejournal.order} image={wejournal} github={projectlist.wejournal.githublink} demo={projectlist.wejournal.demolink}></Project>
</div>
  );
}

export default Projects;