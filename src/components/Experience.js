import React from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

class Experience extends React.Component {
  handleClick = () => {
    let acc = document.getElementsByClassName("experience-accordion-button");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.paddingTop = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.paddingTop = "30px";
        }
      });
    }
  };
  render() {
    return (
      <div className="experience">
        <h2>Experiences</h2>
        <h3>My personal journey</h3>
        <div className="experience-accordion">
          <div className="experience-accordion-item">
            <button
              className="experience-accordion-button button1"
              onClick={this.handleClick}
            >
              <img className="working" src={this.props.working} />
            </button>
            <div className="experience-accordion-panel">
              <span>2021.01 - Current</span>
              <p>
                In 2020 I finally landed a job as a Junior Software Developer
                after months of hard work. My main role is{" "}
                <b>making websites</b>, and adding <b>custom features</b> to it.{" "}
                <br></br> <br></br> Right now I'm also learning RPA, and already
                made a process which{" "}
                <b>adds new clients and sale processes to our database</b>. It
                saves lots of time and no one has to sit in front of the
                computer to type them in manually.
              </p>
            </div>
          </div>
          <div className="experience-accordion-item">
            <button
              className="experience-accordion-button button2"
              onClick={this.handleClick}
            >
              <img className="studying" src={this.props.studying} />
            </button>
            <div className="experience-accordion-panel">
              <span>2020.02 - 2020.12</span>
              <p>
                A lot of time went into studying, and making projects on my own.{" "}
                <br></br>
                One of my friend even shared resources with me who studies
                Computer Science at a well known Hungarian university.
              </p>
            </div>
          </div>
          <div className="experience-accordion-item">
            <button
              className="experience-accordion-button button3"
              onClick={this.handleClick}
            >
              <img
                className="video-tutorials"
                src={this.props.videoTutorials}
              />
            </button>
            <div className="experience-accordion-panel">
              <span>2019.01 - 2019.08</span>
              <p>
                This was the year where it all began. I got into a really
                intensive software developer bootcamp in Budapest. It was a
                great opportunity for me to learn from professionals who already
                had at least a few years of experience as a developer. <br></br>
                <br></br>
                It not only <b>taught me the basics of software development</b>,
                but it also showed me that{" "}
                <b>
                  you can achieve everything if you are persistent and motivated
                  enough
                </b>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="experience-to-the-top">
          <a
            onClick={() => {
              scroll.scrollTo(0);
            }}
          >
            <i class="fa fa-chevron-up"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Experience;
