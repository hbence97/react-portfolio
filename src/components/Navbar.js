import React from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.scrollTo = this.scrollTo.bind(this);

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

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
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
            <a onClick={() => scroll.scrollTo(980)}>About me</a>
          </li>
          <li style={{ marginTop: this.state.scrolled ? "0px" : "20px" }}>
            <a onClick={() => scroll.scrollTo(1750)}>Skills</a>
          </li>
          <li style={{ marginTop: this.state.scrolled ? "0px" : "20px" }}>
            <a onClick={() => scroll.scrollTo(2480)}>Projects</a>
          </li>
          <li style={{ marginTop: this.state.scrolled ? "0px" : "20px" }}>
            <a onClick={() => scroll.scrollTo(3750)}>Experiences</a>
          </li>
        </ul>
      </nav>
    );
  }
}
