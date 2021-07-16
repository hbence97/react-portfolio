import React from "react";

export default function Resume(props) {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <div className="bence-resume-container">
        <a href={props.benceResume} target="_blank">
          <img
            className="bence-resume"
            src={props.benceResume}
            alt="My resume"
          />
        </a>
        <span>
          Here is my resume<br></br> if you have not seen it already.
        </span>
      </div>
    </div>
  );
}
