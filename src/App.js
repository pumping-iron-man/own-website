import React from 'react';
import './App.css';

import profile from './img/Zeichenfläche 1.png'
import githubicon from './img/github_logo.png'
import instaicon from './img/instagram_logo.png'
import xingicon from './img/xing_logo.png'

function App() {
  return (
    <div className="App">
      <button id="contact">
        <a href="mailto:zahmad94@gmail.com">
          <img src={profile} alt="profil"/>
          <p>get in touch</p>
        </a>
      </button>
      <div id="personal-info">
        <p>hi,</p>
        <p>my name is zeeshan.</p>
        <p>i'm moving towards the trinity status:</p>
        <div id="skills">
          <p>experience</p>
          <p>design</p>
          <p>developement</p>
        </div>
      </div>
      <div id="icons">
        <button>
          <a href="https://www.xing.com/profile/Zeeshan_Ahmad37/cv" target="_blank" rel="noopener noreferrer">
            <img src={xingicon} alt="xing"/>
          </a>
        </button>
        <button>
          <a href="https://github.com/pumping-iron-man" target="_blank" rel="noopener noreferrer">
            <img src={githubicon} alt="github"/>
          </a>          
        </button>
        <button>
          <a href="https://www.instagram.com/prototyphius/?hl=de" target="_blank" rel="noopener noreferrer">
            <img src={instaicon} alt="intagram"/>
          </a>
        </button>
      </div>
    </div>
  );
}

export default App;
