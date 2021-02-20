import React from "react";
import { SiJavascript, SiDotNet } from 'react-icons/si';
import { FaPaintBrush, FaDatabase, FaTools, FaPhp } from 'react-icons/fa';


function Skills() {
  return (
    <aside role="complementary" className="container pr-5 pl-5 pt-3 mb-5" id="skills">
<h3 class="mb-3 display-4">SKILLS</h3>
    <div className="row">
        
  

    <section className="col-lg-4 col-sm-12">
            <header className="row pl-3 mb-2">
                <div>
            <SiJavascript className="mr-2"/>
            </div>
            

                <div>
                    <h4 className="m-0 lh-0">JavaScript</h4>
                </div>

            </header>
            <code>React</code>
            <code>Angular</code>
            <code>Node.js</code>
            <code>Express.js</code>
            <code>jQuery</code>
            <code>TypeScript</code>
            <code>Socket.IO</code>
        </section>
        <section class="col-lg-4 col-sm-12">
            <header class="row pl-3 mb-2">
                <div>
                    <SiDotNet className="mr-2"/>
                </div>
                <div>
                    <h4 class="m-0 lh-0">C#</h4>
                </div>

            </header>
            <code>.NET Core</code>
            <code>Web Api</code>
            <code>Blazor</code>
            <code>Razor Pages</code>


        </section>
        <section class="col-lg-4 col-sm-12 ">
            <header class="row pl-3 mb-2">
                <div>
                    <FaDatabase className="mr-2"/>
                </div>
                <div>
                    <h4 class="m-0 lh-0">Database</h4>
                </div>

            </header>
            <code>MySQL</code>
            <code>PostgreSQL</code>
            <code>Sequelize</code>


        </section>
        <section className="col-lg-4 col-sm-12">
            <header class="row pl-3 mb-2">
         <div >
            <FaPaintBrush className="mr-2"/> 
            </div>
            <div>
             <h4 className="m-0 lh-0">&#32; UI</h4>
             </div>
            </header>
            <code>(S)CSS</code>
            <code>Photoshop</code>
            <code>Figma</code>
            <code>Bootstrap</code>
            <code>Tailwind</code>
            <code>Material UI</code>
            <code>Blazorise</code>



        </section>
       
     
        <section class="col-lg-4 col-sm-12">
            <header class="row pl-3 mb-2">
                <div>
                   <FaTools className="mr-2"/>
                </div>
                <div>
                    <h4 class="m-0 lh-0">Tools</h4>
                </div>

            </header>
            <code>Git</code>
            <code>Github</code>
            <code>Azure</code>
            <code>Postman</code>
            <code>MongoDB</code>
            <code>RavenDB</code>
            <code>PGadmin</code>
            <code>Vagrant</code>


        </section>

        <section class="col-lg-4 col-sm-12">
            <header class="row pl-3 mb-2">
                <div>
                    <FaPhp className="mr-2"/>
                </div>
                <div>
                    <h4 class="m-0 lh-0">PHP</h4>
                </div>

            </header>
            <code>Laravel</code>
            <code>Twig</code>


        </section>
        


    </div>


</aside>
  );
}

export default Skills;