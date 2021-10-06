import React from "react";

const AboutMeButton = props => {
  return (
    <a href={props.href} target="_blank" className={props.classNameaTag}>
      <i className={`fa fa-5x + ${props.classNameiTag}`}></i>
    </a>
  );
};

export default AboutMeButton;
