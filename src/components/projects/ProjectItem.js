import React from "react";

const ProjectItem = props => {
  return (
    <a
      className={`project-item + ${props.className}`}
      href={props.href}
      target="_blank"
    >
      <div className="column column-image">
        <img src={props.src} alt={props.alt} />
      </div>
    </a>
  );
};

export default ProjectItem;
