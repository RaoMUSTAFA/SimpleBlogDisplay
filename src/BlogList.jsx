import React from 'react';
import BlogPost from './BlogPosts'; // Import the child component
import blogPosts from './blogPosts.json'; // Import the JSON file

const BlogList = () => {
return (
    <div>
    <h1>Blog Posts</h1>
    <ul>
        {blogPosts.map((post) => (
        <BlogPost key={post.id} title={post.title} author={post.author} content={post.content} />
        ))}
    </ul>
    </div>
);
};

export default BlogList;
