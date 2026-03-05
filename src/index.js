import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faFilm, faUser, faSkull, faStar, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faGithub, } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowLeft, faFilm, faUser, faSkull, faStar, faFacebook, faInstagram, faLinkedin, faTwitter, faGithub, faAngleLeft, faAngleRight)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
