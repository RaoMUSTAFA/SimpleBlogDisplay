import React from 'react';

const BlogPost = ({ title, author, content }) => {
  return (
    <li>
      <h2>{title}</h2>
      <h4>By: {author}</h4>
      <p>{content}</p>
    </li>
  );
};

export default BlogPost;
