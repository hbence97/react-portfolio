import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projects(props) {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <h3>There are 15+ more smaller projects on my GitHub!</h3>
      <div className="project-items">
        <ProjectItem
          className="weather-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/WeatherForecast/"
          src={props.weatherAppPreview}
          alt="clickable weather app icon"
        />

        <ProjectItem
          className="flappy-bird-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/FlappyBird/"
          src={props.flappyBirdPreview}
          alt="clickable flappy bird icon"
        />

        <ProjectItem
          className="chatroom-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/Chatroom/"
          src={props.chatroomPreview}
          alt="clickable chatroom icon"
        />

        <ProjectItem
          className="project-item snake-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/Snake/"
          src={props.snakePreview}
          alt="clickable snake icon"
        />

        <ProjectItem
          className="tetris-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/Tetris/"
          src={props.tetrisPreview}
          alt="clickable tetris icon"
        />

        <ProjectItem
          className="speed-typing-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/SpeedTypingGame/"
          src={props.speedTypingPreview}
          alt="clickable speed typing game icon"
        />
      </div>
    </div>
  );
}
