import React, { Component } from 'react';
import BlogPost1 from './BlogPost1.js';
import BlogPost2 from './BlogPost2.js';
import BlogPost3 from './BlogPost3.js';
import './Blog.css';

class Blog extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="blog-grid mdl-grid">
          {/*} Will have to size the grid to make sure the blogPosts are centered
            On the screen. */}
          <BlogPost1/>
          <BlogPost2/>
          <BlogPost3/>
      </div>
    )
  }
}


export default Blog;
