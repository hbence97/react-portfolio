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
            “Those people who develop the ability to continuously acquire new
            and better forms of knowledge that they can apply to their work and
            to their lives will be the movers and shakers in our society for the
            indefinite future.”
          </h2>
          <h3>- Brian Tracy</h3>
        </div>
      </article>
      <a
        href="https://www.linkedin.com/in/bence-hegyes-881101177/"
        className="header-button"
        target="_blank"
      >
        <span>Connect with me</span>
      </a>
    </header>
  );
}
