import React from "react";
import Project from "./Project"
import projectlist from '../assets/projectlist.json'
import wejournal from "../assets/wejournal.PNG"
import schnack from "../assets/schnack3.png"
import thermox from "../assets/thermox.PNG"
import kinoxdb from "../assets/u07movie-app.png"
import npcstore from "../assets/lilith.PNG"
import carrental from "../assets/carrental.JPG"

function Projects() {
  return (
 
<div className="container pr-5 pl-5 pt-3 mx-auto" id="projects">
<h3 class="mb-4 fw-light display-4">PROJECTS</h3>
  <Project title = {projectlist.schnack.title} stack={projectlist.schnack.stack} description = {projectlist.schnack.description} order={projectlist.schnack.order} github={projectlist.schnack.githublink} demo={projectlist.schnack.demolink} image={schnack}></Project>
  <Project title = {projectlist.wejournal.title} stack={projectlist.wejournal.stack} description = {projectlist.wejournal.description} order={projectlist.wejournal.order} image={wejournal} github={projectlist.wejournal.githublink} demo={projectlist.wejournal.demolink}></Project>
  <Project title = {projectlist.thermox.title} stack={projectlist.thermox.stack} description = {projectlist.thermox.description} order={projectlist.thermox.order} image={thermox} github={projectlist.thermox.githublink} demo={projectlist.thermox.demolink}></Project>
  <Project title = {projectlist.kinoxdb.title} stack={projectlist.kinoxdb.stack} description = {projectlist.kinoxdb.description} order={projectlist.kinoxdb.order} image={kinoxdb} github={projectlist.kinoxdb.githublink} demo={projectlist.kinoxdb.demolink}></Project>
  <Project title = {projectlist.npcstore.title} stack={projectlist.npcstore.stack} description = {projectlist.npcstore.description} order={projectlist.npcstore.order} image={npcstore} github={projectlist.npcstore.githublink} demo={projectlist.npcstore.demolink}></Project>
  <Project title = {projectlist.carrental.title} stack={projectlist.carrental.stack} description = {projectlist.carrental.description} order={projectlist.carrental.order} image={carrental} github={projectlist.carrental.githublink} demo={projectlist.carrental.demolink}></Project>

</div>
  );
}

export default Projects;