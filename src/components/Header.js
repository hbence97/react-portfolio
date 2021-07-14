import React from "react";

export default function Header() {
  return (
    <header>
      <div className="mask">
        <div className="shape"></div>
      </div>
      <article>
        <div className="content-text">
          <h1>Junior Frontend Developer</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            maxime quod error labore nulla nesciunt recusandae, eveniet,
            exercitationem rerum a incidunt, pariatur officia delectus provident
            enim hic in dolore ad?
          </h2>
        </div>
      </article>
      <a href="#" className="header-button">
        <span>Contact me</span>
      </a>
    </header>
  );
}
