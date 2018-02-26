import React, { Component } from 'react';
import './Home.css'
import homeImage from './images/about_me.jpg';

class Home extends Component {
  constructor() {
    super();

    this.state = {
            introduction: `I fell in love with technology after the entrance of the
                          iPhone in 2007. I had already had a general interest with tech prior
                          to the iPhone’s release but after witnessing what could be done with
                          technology and software, I was hooked! That led me to work at companies like
                          AT&T and Mosaic to quench my thirst for all things
                          tech. That passion eventually lead me on a journey to learn
                          how to code. I now feel confident enough to take my skills
                          to the next level and I'm now also looking to build
                          robust applications with a fast-paced and growing company.`,
            currently: `I am currently attending SMU's Full Stack Flex Web Development bootcamp
                   which is a 6 month program aimed at preparing students to be front-end and
                   back-end developers. I am also a recipient of "Grow with Goole Challenge"
                   Scholarship which means that I get to interact with people all over the world
                   to participate in global learning environment. My goal is to code as much as I
                   possible can until Im in a position to do some good.`
    }
  }
  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Welcome</h2>
          </div>
          <div className="mdl-card__media">
            <img className="article-image" src={homeImage} border="0" alt=""/>
          </div>
          <div className="mdl-grid portfolio-copy">
            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Introduction</h3>
            <div className="mdl-cell mdl-cell--10-col mdl-card__supporting-text no-padding">
              <p>
                {this.state.introduction}
              </p>
            </div>
            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Currently</h3>
            <div className="mdl-cell mdl-cell--10-col mdl-card__supporting-text no-padding">
              <p>
                {this.state.currently}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
