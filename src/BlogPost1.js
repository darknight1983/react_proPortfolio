import React, { Component } from 'react';
import './Blog.css';


class BlogPost1 extends Component {
  render() {
    return (
      <div className="mdl-cell mdl-cell--8-col mdl-card mdl-shadow--4dp">
        <div className="blog_1 mdl-card__title">
          {/* The title of the post should be passed in as a prop. */}
          <h2 className="mdl-card__title-text">First Blog Post</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {/* This information should also be passed in as a prop. */}
          This is just going to be a brief summary of what the actual post is
          going to be about. I will have to find a way to shorten the blog in
          this component.
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


export default BlogPost1;
