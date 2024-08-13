import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div class="nav">
          <div class="nav-left">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <span>CLI</span>
          </div>
          <div class="nav-right">
            <p>Manual</p>
            <p>Release notes</p>
          </div>
        </div>
        <br />
        <br />
        <div class="nav-hero">
          <div class="nav-main">
            <h1>
              Take GitHub to the <br /> command line
            </h1>
            <p class="nav-p">
              GitHub CLI brings GitHub to your terminal. Free and <br /> open
              source.
            </p>
            <br />
            <button>Download for Windows</button>
            <br />
            <br />
            <p class="nav-p-p">View installation instructions →</p>
          </div>
        </div>
        <br />
      </nav>
      <div class="sec-main">
        <br />
        <br />
        <center>
          <a href="https://git.io/typing-svg">
            <img
              src={"https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=F7EAE3&center=true&random=false&width=510&lines=%24+gh+alias;%24+gh+issue+list;%24+gh+pr+status"}
              alt="Typing SVG"
            />
          </a>
          <p>Create a new release.</p>
          <br />
        </center>
        <div class="section">
          <div class="sec-imp">
            <div class="sec-resp">
              <div class="imp-resp">
                <div class="imp-one"></div>

                <div class="imp-two"></div>
                <div class="imp-three"></div>
              </div>

              <div class="imp-play">
                <i class="fa-solid fa-pause" style="color: white;"></i>
              </div>
            </div>
            <br />

            <p>
              $ gh pr checkout 12 <br />
              remote: Enumerating objects: 66, done. <br />
              remote: Counting objects: 100% 66/66, done. <br />
              remote: Total 83 delta 66, reused 66 delta 66, pack-reused 17""
              <br />
              Unpacking objects: 100% 83/83, done. <br />
              From https://github.com/owner/repo <br />
              * new ref refs/pull/8896/head - patch-2 <br />
              M README.md <br />
              Switched to branch 'patch-2'
            </p>
          </div>
        </div>
        <br />
        <h5>View all GitHub CLI commands →</h5>
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
