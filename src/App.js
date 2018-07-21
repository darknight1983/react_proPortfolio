import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.js'
import Blog from './Blog.js'
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import BlogContent1 from './blogContent1.js';
import BlogContent2 from './blogContent2.js';
import BlogContent3 from './blogContent3.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-layout mdl-layout mdl-js-layout">
            <header className="demo-layout-transparent mdl-color--primary">
                <div className="mdl-layout-icon"></div>
                <div className="mdl-layout__header-row">
                  <span className="mdl-layout__title">Jacolby Green</span>
                  <div className="mdl-layout-spacer"></div>
                  <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <Link to='/'><a className="mdl-navigation__link" href="index.html">Home</a></Link>
                    <Link to="/blog"><a className="mdl-navigation__link" href="blog.html">Blog</a></Link>
                    <Link to='/portfolio'><a className="mdl-navigation__link" href="portfolio.html">Portfolio</a></Link>
                    <Link to='/contact'><a className="mdl-navigation__link" href="contact.html">Contact</a></Link>
                    <a className="mdl-navigation__link" href="https://github.com/darknight1983" target="_blank">Github</a>
                    </nav>
                </div>
              </header>
              <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Jacolby Green</span>
                <nav className="mdl-navigation">
                  <Link to='/'><a className="mdl-navigation__link" href="index.html">Home</a></Link>
                  <Link to="/blog"><a className="mdl-navigation__link" href="blog.html">Blog</a></Link>
                  <Link to='/portfolio'><a className="mdl-navigation__link" href="portfolio.html">Portfolio</a></Link>
                  <Link to='/contact'><a className="mdl-navigation__link" href="contact.html">Contact</a></Link>
                  <a className="mdl-navigation__link" href="https://github.com/darknight1983" target="_blank">Github</a>
                </nav>
              </div>
              <main className="mdl-layout__content">


                    <Route exact path='/' component={Home}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/portfolio' component={Portfolio}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/blogContent1' component={BlogContent1}/>
                    <Route path='/blogContent2' component={BlogContent2}/>
                    <Route path='/blogContent3' component={BlogContent3}/>




                  <footer className="mdl-mini-footer mdl-color--grey-900">
                    <div className="mdl-mini-footer__middle-section">
                      <button onClick={() => window.location.href = 'https://twitter.com/CoodyMac'} className="mdl-mini-footer--social-btn social-btn social-btn__twitter" id="twitter">
                        <span className="visuallyhidden">Twitter</span>
                      </button>
                      <button onClick={() => window.location.href = 'https://www.facebook.com/jacolby.green'} className="mdl-mini-footer--social-btn social-btn social-btn__facebook" id="facebook">
                        <span className="visuallyhidden">Facebook</span>
                      </button>
                      <button onClick={() => window.location.href = 'https://www.linkedin.com/in/jacolby-green-308b701b'} className="mdl-mini-footer--social-btn social-btn social-btn__linkedin" id="linkedin">
                        <span className="visuallyhidden">Linkedin</span>
                      </button>
                    </div>
                  </footer>
                </main>
        </div>
      </Router>
    )
  }
}

export default App;
