import React, { Component } from 'react';

class BlogPost3 extends Component {
  render() {
    return (
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="blog_3 mdl-card__title">
           {/* The title of the post should be passed in as a prop.*/}
            <h2 className="mdl-card__title-text">Check Me Out On Medium</h2>
          </div>
          <div className="mdl-card__supporting-text">
          {/* This information should also be passed in as a prop.*/}
            Check out my Medium profile. Its been a while since Ive added anything
            but I think that will change in the near future...
          </div>
          <div className="mdl-card__action mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
               href="https://medium.com/@CoodyMac">
              Read Blog
            </a>
          </div>
        </div>
    )
  }
}

export default BlogPost3;
