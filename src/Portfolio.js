import React, { Component } from 'react';
import ProjectCard from './Project-card.js';
import liriScreenShot from './images/liri_node_app.png';
import BootStrapPortfolio from './images/Bootstrap_Portfolio.png';
import ReactYoutubeShot from './images/React_Youtube.png';
import EatABurger from './images/eatABurger.png';



class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
      projects: [{
        key: 1,
        title: '"LIRI" Node App',
        screenShot: liriScreenShot,
        alt: 'liri_app_screen_shot',
        link: 'https://github.com/darknight1983/liri_node_app',
        description: `LIRI is like iPhone's SIRI. However, while SIRI is a Speech
                 Interpretation and Recognition Interface, LIRI is a Language
                 Interpretation and Recognition Interface. LIRI will be a command
                 line node app that takes in parameters and gives you back data.`
      },{
        key: 2,
        title: 'BootStrap Portfolio',
        screenShot: BootStrapPortfolio,
        alt: 'Bootstrap-Portfolio',
        link: 'https://github.com/darknight1983/bootstrap_portfolio',
        description: `A simple portfoilo website built with HTML, CSS, and the very
                  powerful and flexible framework Bootstrap. The website utilizes
                  Bootstrap to create a responsive, user-friendly layout on any
                  screen size.`
      },{
        key: 3,
        title: 'React-Youtube',
         screenShot: ReactYoutubeShot,
         alt: 'Youtube Clone built with React',
         link: 'https://github.com/darknight1983/React_Youtube_searchSite',
         description: `A basic Youtube application built with React and other Node
                   modules. This application demonstrates the power of
                   React's library when building UI components that are reusable.`
       },{
         key: 4,
         title: 'Eat-A-Burger',
         screenShot: EatABurger,
         alt: 'Eat-A-Burger',
         link: 'https://github.com/darknight1983/burger',
         description: `A Node, Express, Handlebars, and MySQL burger
                       app that lets users input the names of burgers they'd
                       like to eat... and then devour them!`
       }]
    }
  }
  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
        {this.state.projects.map(project =>
          <ProjectCard screenShot={project.screenShot}
                        link={project.link}
                        alt={project.alt}
                        description={project.description}
                        title={project.title}
                        key={project.key}/>
        )}
      </div>
    )
  }
}

export default Portfolio;
