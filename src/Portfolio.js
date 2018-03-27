import React, { Component } from 'react';
import ProjectCard from './Project-card.js';
import Seeds from './ProductSeeds.js';
import liriScreenShot from './images/liri_node_app.png';
import BamazonScreenShot from './images/bamazon.png';
import ReactPortfolioShot from './images/react-mdl-portfolio.png';
import EatABurger from './images/eatABurger.png';



class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
      projects: []
    }
  }
  render() {
    const Projects = Seeds.map((project) => (
      <ProjectCard screenShot={project.screenShot}
                         link={project.link}
                         alt={project.alt}
                         description={project.description}
                         title={project.title}
                         key={project.key}/>
                     ));
    return (
      <div className="mdl-grid portfolio-max-width">
        {Projects}
      </div>
    )
  }
}

export default Portfolio;
