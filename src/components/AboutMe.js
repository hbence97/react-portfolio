import React from "react";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-scroll-to"></div>
      <article>
        <h2>About Me</h2>
        <h3>
          Welcome to my website. My name is Bence, and I wanted to make
          something more personal than a resume while showcasing some of my
          earlier projects. I would like to think myself as a really persistent
          and hard working person. If I want to achieve something I'm giving my
          all to reach that goal. If you like what you see, or want to have a
          talk, make sure you contact me on LinkedIn. Thanks for being here.
          Best regards!
        </h3>
      </article>
      <div className="buttons">
        <a
          href="https://www.linkedin.com/in/bence-hegyes-881101177/"
          target="_blank"
          className="about-me-linkedIn "
        >
          <i className="fa fa-linkedin-square fa-5x"></i>
        </a>
        <a
          href="https://github.com/hbence97"
          target="_blank"
          className="about-me-github "
        >
          <i className="fa fa-github-square fa-5x"></i>
        </a>
      </div>
    </div>
  );
}
