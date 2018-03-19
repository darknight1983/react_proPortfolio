import React, { Component } from 'react';
import './Blog.css';


class BlogPost1 extends Component {
  render() {
    return (
      <div className="mdl-cell mdl-cell--8-col mdl-card mdl-shadow--4dp">
        <div className="blog_1 mdl-card__title">
          {/* The title of the post should be passed in as a prop. */}
          <h2 className="mdl-card__title-text">Reflecting on the Last Few Months</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {/* This information should also be passed in as a prop. */}
          <p>
            This past five months have not been easy but have been rewarding.
            Im going to share a few snippets on things about this process that
            were most notable to me...
          </p>
        </div>
        <div className="mdl-card__action mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
             href="/blogContent1">
            Read Blog
          </a>
        </div>
      </div>
    )
  }
}


export default BlogPost1;
