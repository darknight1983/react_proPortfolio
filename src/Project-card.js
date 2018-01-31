import React, { Component } from 'react';
import './Project-card.css';



class ProjectCard extends Component {
  constructor(props) {
    super(props);


  }
  render() {
    return (
      <div className="project mdl-cell mdl-cell--4-col mdl-card mdl-shadow--4dp">
        <div className="project-img mdl-card__media">
          <img src={this.props.screenShot} alt={this.props.alt}/>
        </div>
        <div className="project-name mdl-card__title mdl-color--primary">
          <h2 className="mdl-card__title-text"><a href={this.props.link}>Liri_Node_App</a></h2>
        </div>
        <div className="mdl-card__supporting-text">
          <p>
            {this.props.description}
          </p>
        </div>
      </div>
    )
  }
}

export default ProjectCard
