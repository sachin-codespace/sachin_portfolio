import React from "react";
import './Mywork.css';
import projects from "./MyWorkList";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <h1 className="mywork-heading">My Latest Work</h1>
      <div className="works">
        {projects.map((project) => {
          return (
            <a key={project.title} target="_blank" rel="noopener noreferrer" href={project.webUrl}>
              <img className="work" title={project.title} src={project.imageSrc} alt={project.title} />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Mywork;
