import React, { Component } from 'react';

class BlogPost2 extends Component {
  render() {
    return (
      <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--4dp">
        <div className="blog_2 mdl-card__title">
         {/* The title of the post should be passed in as a prop.*/}
          <h2 className="mdl-card__title-text">It Aint Easy, But Can Be Done...</h2>
        </div>
        <div className="mdl-card__supporting-text">
        {/* This information should also be passed in as a prop.*/}
          I want to share my thoughts on what it takes for aspiring developers
          to be successful on their journey...
        </div>
        <div className="mdl-card__action mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
             href="/blogContent2">
            Read Blog
          </a>
        </div>
      </div>
    )
  }
}

export default BlogPost2;
