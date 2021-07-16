import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-buttons">
        <li>
          <a
            href="https://www.linkedin.com/in/bence-hegyes-881101177/"
            target="_blank"
            className="footer-linkedIn"
          >
            <i className="fa fa-linkedin-square fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/hbence97"
            target="_blank"
            className="footer-github"
          >
            <i className="fa fa-github-square fa-2x"></i>
          </a>
        </li>
      </ul>
      <span>© 2021 Bence Hegyes</span>
    </div>
  );
}
