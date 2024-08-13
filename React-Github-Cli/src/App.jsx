import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
        <nav>
        <div class="nav">
            <div class="nav-left">
                <i class="fa-brands fa-github"></i>
                <span>CLI</span>
            </div>
            <div class="nav-right">
                <p>Manual</p>
                <p>Release notes</p>
            </div>
        </div>
        <br/><br/>
        <div class="nav-hero">
            <div class="nav-main">
                <h1>Take GitHub to the <br/> command line</h1>
                <p class="nav-p">GitHub CLI brings GitHub to your terminal. Free and <br/> open source.</p>
                <br/>
                <button>Download for Windows</button>
                <br/><br/>
                <p class="nav-p-p">View installation instructions →</p>
            </div>
        </div>
        <br/>
    </nav>

    </>
  )
}

export default App