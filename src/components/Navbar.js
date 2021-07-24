import React from "react";
import { animateScroll as scroll, scroller, Link } from "react-scroll";

export default class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    window.scrollY !== 0
      ? this.setState({ scrolled: true })
      : this.setState({ scrolled: false });
  };

  render() {
    return (
      <nav
        style={{ height: this.state.scrolled ? "60px" : "100px" }}
        className="Navbar-nav"
      >
        <ul className="Navbar-ul">
          <li style={{ marginTop: this.state.scrolled ? "0px" : "20px" }}>
            <Link to="about-me-scroll-to" smooth={true}>
              About me
            </Link>
          </li>
          <li style={{ marginTop: this.state.scrolled ? "0px" : "20px" }}>
            <Link to="skills-scroll-to" smooth={true}>
              Skills
            </Link>
          </li>
          <li style={{ marginTop: this.state.scrolled ? "0px" : "20px" }}>
            <Link to="projects" smooth={true}>
              Projects
            </Link>
          </li>
          <li style={{ marginTop: this.state.scrolled ? "0px" : "20px" }}>
            <Link to="experiences" smooth={true}>
              Experiences
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
