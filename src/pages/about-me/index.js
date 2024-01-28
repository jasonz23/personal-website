import react from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import "./about-me.css";
const AboutMe = () => {
  return (
    <div className="about-me-page-root">
      <div className="about-me-page-screen">
        <p>
          <span className="main-page-command-name">jasonzhao</span>@
          <span className="main-page-command-location">terminal</span>:$ ~ title
        </p>
        <pre className="about-page-name-row"> _ _ __ __ </pre>
        <pre className="about-page-name-row"> /\ | | | | | \/ | </pre>
        <pre className="about-page-name-row">
          {" "}
          / \ | |__ ___ _ _| |_ | \ / | ___{" "}
        </pre>
        <pre className="about-page-name-row">
          {" "}
          / /\ \ | '_ \ / _ \| | | | __| | |\/| |/ _ \
        </pre>
        <pre className="about-page-name-row">
          {" "}
          / ____ \| |_) | (_) | |_| | |_ | | | | __/
        </pre>
        <pre className="about-page-name-row">
          {" "}
          /_/ \_\_.__/ \___/ \__,_|\__| |_| |_|\___|
        </pre>
        <div className="main-page-subtitle-body">
          <p className="main-page-subtitle">Some info about me</p>
          <p className="main-page-instructions">
            Enter 'help' to see list of commands and locations
          </p>
        </div>
        <p>
          <span className="main-page-command-name">jasonzhao</span>@
          <span className="main-page-command-location">terminal</span>:$ ~ links
        </p>
        <Link className="main-page-link" to="/">
          Main Page
        </Link>
        <p>
          <span className="main-page-command-name">jasonzhao</span>@
          <span className="main-page-command-location">terminal</span>:$ ~
          aboutme
        </p>
        <div className="about-me-info">
          Welcome to my personal website!
          <br />
          <br />
          My name is Jason Zhao and in my free time, I enjoy a variety of
          hobbies.
          <br />
          I have a passion for tennis and have been competing since I was 14
          years old. When I'm not on the court, I enjoy expressing my creativity
          through art. I've taken art classes for over 5 years and find it to be
          a relaxing and fulfilling way to spend my time.
          <br />
          Additionally, I have a knack for programming and love to create cool
          websites which you can check out in my projects tab.
          <br />
          <br />
          Whether I'm hitting a tennis ball, drawing, or coding, I'm always
          pushing myself to improve and learn new skills. Thank you for visiting
          my website and I hope you enjoy learning more about me!
        </div>
        <div className="about-me-info">
          📚 Third year computer science student at The University of British
          Columbia.
          <br />
          👨‍💻 Full Stack Developer at Splunk (
          <span style={{ fontWeight: "bold" }}>
            Next, React, Typescript, JavaScript, Laravel, Java, PHP, Node JS
          </span>
          )
          <br />
          <br />
          As a full stack developer and student at the University of British
          Columbia, I am constantly striving to improve my skills and stay
          up-to-date with the latest technologies. My main expertise lies in{" "}
          <span style={{ fontWeight: "bold" }}>
            Next, React, Typescript, JavaScript, Java, Node JS and PHP
          </span>
          , but I am always eager to learn new programming languages and tools.
          I thrive in fast-paced environments and consider myself a quick
          learner. I am highly motivated and dedicated to delivering
          high-quality software solutions.
        </div>
        <div className="about-me-info">
          Relavent courses I have taken:
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>CPSC 110</span>{" "}
              (Computations, Programs, and Programming - Racket)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>CPSC 121</span> (Models of
              Computation)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>CPSC 210</span> (Software
              Construction - Java)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>CPSC 221</span> (Algorithms
              and Data Structures - C++)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>CPSC 213</span> (Computer
              Systems - C, C++)
            </li>
          </ul>
        </div>
        <div id="about-me-input-body"></div>
        <Input location="about-me" />
        <br />
      </div>
    </div>
  );
};
export default AboutMe;
