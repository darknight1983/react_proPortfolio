import React, { Component } from 'react';



class ProjectCard extends Component {
  constructor(props) {
    super(props);


  }
  render() {
    return (
      <div className="project mdl-cell mdl-cell--4-col mdl-card mdl-shadow--4dp">
        <div className="project-img mdl-card__media">
          <img src={} alt=""/>
        </div>
        <div className="project-name mdl-card__title mdl-color--primary">
          <h2 className="mdl-card__title-text"><a href="https://github.com/darknight1983/liri_node_app">Liri_Node_App</a></h2>
        </div>
        <div className="mdl-card__supporting-text">
          <p>
          // This is where the description of the project goes.
          <p>
        </div>
      </div>
    )
  }
}
