import React from "react";

export default function Projects(props) {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <h3>There are 15+ more smaller projects on my GitHub!</h3>
      <div className="project-items">
        <a
          className="project-item weather-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/WeatherForecast/"
          target="_blank"
        >
          <div className="column column-image">
            <img
              src={props.weatherAppPreview}
              alt="clickable weather app icon"
            />
          </div>
        </a>

        <a
          className="project-item flappy-bird-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/FlappyBird/"
          target="_blank"
        >
          <div className="column column-image">
            <img
              src={props.flappyBirdPreview}
              alt="clickable flappy bird icon"
            />
          </div>
        </a>

        <a
          className="project-item chatroom-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/Chatroom/"
          target="_blank"
        >
          <div className="column column-image">
            <img src={props.chatroomPreview} alt="clickable chatroom icon" />
          </div>
        </a>

        <a
          className="project-item snake-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/Snake/"
          target="_blank"
        >
          <div className="column column-image">
            <img src={props.snakePreview} alt="clickable snake icon" />
          </div>
        </a>

        <a
          className="project-item tetris-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/Tetris/"
          target="_blank"
        >
          <div className="column column-image">
            <img src={props.tetrisPreview} alt="clickable tetris icon" />
          </div>
        </a>

        <a
          className="project-item speed-typing-container"
          href="https://hbence97.github.io/SmallJavascriptProjects/SpeedTypingGame/"
          target="_blank"
        >
          <div className="column column-image">
            <img
              src={props.speedTypingPreview}
              alt="clickable speed typing game icon"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
