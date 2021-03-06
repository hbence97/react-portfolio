import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Footer from "./components/Footer";

import flappyBirdPreview from "./images/flappy_bird_preview_1.jpg";
import snakePreview from "./images/snake_game_preview.png";
import chatroomPreview from "./images/chatroom_preview.png";
import weatherAppPreview from "./images/weather_forecast_preview_1.png";
import tetrisPreview from "./images/tetris_preview.png";
import speedTypingPreview from "./images/typing_preview.png";
import working from "./images/working.png";
import studying from "./images/studying.png";
import videoTutorials from "./images/video-tutorials.png";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects
          flappyBirdPreview={flappyBirdPreview}
          snakePreview={snakePreview}
          chatroomPreview={chatroomPreview}
          weatherAppPreview={weatherAppPreview}
          tetrisPreview={tetrisPreview}
          speedTypingPreview={speedTypingPreview}
        />
        <Experience
          working={working}
          studying={studying}
          videoTutorials={videoTutorials}
        />
        <Footer />
      </>
    );
  }
}

export default App;
