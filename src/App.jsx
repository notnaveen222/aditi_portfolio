import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import aditi from "./assets/aditi_cropped.png";
import githubIcon from "./assets/github.png";
import linkedInIcon from "./assets/linkedin.png";

function App() {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="image-container">
          <img class="image" src={aditi} alt="" />
        </div>
        <div class="name-text">
          Hi, I'm <span class="pink-text-color">Aditi Babu</span>
        </div>
        <div className="positions-container">
          <div className="position">
            Android Club President{" "}
            <span style={{ position: "relative", top: "-2px" }}>👑</span>
          </div>
        </div>
        <div class="social-icons">
          <a href="#">
            <img class="social-icon" src={githubIcon} alt="github" />
          </a>
          <a href="#">
            <img class="social-icon" src={linkedInIcon} alt="github" />
          </a>
        </div>
        <div class="description-text">
          I'm a Sophomore studying Computer Science Engineering at VIT Chennai.
          With a passion for <span class="pink-text-color">management</span> and
          <span class="pink-text-color"> content writing</span> skills, am
          always eager to learn and work on new challenges.
        </div>
      </div>
    </>
  );
}

export default App;
