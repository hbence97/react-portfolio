import React from "react";
import { animateScroll as scroll } from "react-scroll";

import Card from "./Card";
import Button from "./Button";
import CardPanel from "./CardPanel";

const Experience = props => {
  return (
    <div className="experience" id="experiences">
      <h2>Experiences</h2>
      <h3>My personal journey</h3>
      <div className="experience-accordion">
        <Card>
          <Button className="button1">
            <img className="working" src={props.working} alt="working icon" />
          </Button>
          <CardPanel>
            <span>2021.01 - Current</span>
            <p>
              In 2020 I finally landed a job as a Junior Software Developer at a
              smaller company after months of hard work. My main role was{" "}
              <b>making websites</b>, and adding <b>custom features</b> to it.{" "}
              <br></br>
              <br></br>
              In october, I joined <b>DXC Technology</b> as a{" "}
              <b>Junior Frontend Developer</b>, which was literally my dream
              job, and I couldn't be more happy about it.
            </p>
          </CardPanel>
        </Card>
        <Card>
          <Button className="button2">
            <img
              className="studying"
              src={props.studying}
              alt="studying icon"
            />
          </Button>
          <CardPanel>
            <span>2020.02 - 2020.12</span>
            <p>
              A lot of time went into studying, and making projects on my own.{" "}
              <br></br>
              One of my friend even shared resources with me who studies
              Computer Science at a well known Hungarian university.
            </p>
          </CardPanel>
        </Card>
        <Card>
          <Button className="button3">
            <img
              className="video-tutorials"
              src={props.videoTutorials}
              alt="video tutorials icon"
            />
          </Button>
          <CardPanel>
            <span>2019.01 - 2019.08</span>
            <p>
              This was the year where it all began. I got into a really
              intensive software developer bootcamp in Budapest. It was a great
              opportunity for me to learn from professionals who already had at
              least a few years of experience as a developer. <br></br>
              <br></br>
              It not only <b>taught me the basics of software development</b>,
              but it also showed me that{" "}
              <b>
                you can achieve everything if you are persistent and motivated
                enough
              </b>
              .
            </p>
          </CardPanel>
        </Card>
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
};

export default Experience;
