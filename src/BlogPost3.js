import React, { Component } from 'react';

class BlogPost3 extends Component {
  render() {
    return (
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__title">
           {/* The title of the post should be passed in as a prop.*/}
            <h2 className="mdl-card__title-text">Third Blog Post</h2>
          </div>
          <div className="mdl-card__supporting-text">
          {/* This information should also be passed in as a prop.*/}
            This is where the second post for this layout is going to be.
            Im going to have to see if the content of this component going to
            alter the height and make the whole damn layout hard to work with.
            I hope MDL handles this concern of mine.
          </div>
          <div className="mdl-card__action mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Read Blog
            </a>
          </div>
        </div>
    )
  }
}

export default BlogPost3;
