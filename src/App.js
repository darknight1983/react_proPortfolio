import React, { Component } from 'react';
import Home from './Home.js'
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
          <header className="demo-layout-transparent mdl-color--primary">
              <div className="mdl-layout-icon"></div>
              <div className="mdl-layout__header-row">
                <span className="mdl-layout__title">Jacolby Green</span>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <a className="mdl-navigation__link" href="index.html">Home</a>
                    <a className="mdl-navigation__link" href="portfolio.html">Portfolio</a>
                    <a className="mdl-navigation__link" href="contact.html">Contact</a>
                    <a className="mdl-navigation__link" href="https://github.com/darknight1983">Github</a>
                  </nav>
              </div>
            </header>
            <div className="mdl-layout__drawer">
              <span className="mdl-layout-title">Jacolby Green</span>
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="index.html">Home</a>
                <a className="mdl-navigation__link" href="portfolio.html">Portfolio</a>
                <a className="mdl-navigation__link" href="contact.html">Contact</a>
                <a className="mdl-navigation__link" href="https://github.com/darknight1983">Github</a>
              </nav>
            </div>
            <main className="mdl-layout__content">

                <Contact />


                <footer className="mdl-mini-footer mdl-color--grey-900">
                  <div className="mdl-mini-footer__middle-section">
                    <button className="mdl-mini-footer--social-btn social-btn social-btn__twitter" id="twitter">
                      <span className="visuallyhidden">Twitter</span>
                    </button>
                    <button className="mdl-mini-footer--social-btn social-btn social-btn__facebook" id="facebook">
                      <span className="visuallyhidden">Facebook</span>
                    </button>
                    <button className="mdl-mini-footer--social-btn social-btn social-btn__linkedin" id="linkedin">
                      <span className="visuallyhidden">Linkedin</span>
                    </button>
                  </div>
                </footer>
              </main>
      </div>
    )
  }
}

export default App;
