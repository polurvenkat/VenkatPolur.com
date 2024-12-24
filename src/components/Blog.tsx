import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    { title: 'Mastering Lean Architecture', date: '2024-01-15', summary: 'An introduction to lean architecture and its benefits.' },
    { title: 'Automation in Enterprise Systems', date: '2023-12-05', summary: 'How automation is transforming enterprise workflows.' },
    { title: 'Scalable Cloud Solutions', date: '2023-11-20', summary: 'Best practices for building scalable cloud architectures.' },
  ];

  return (
    <main>
      <section>
        <h2>My Blog</h2>
        <ul>
          {blogPosts.map((post, index) => (
            <li key={index}>
              <h3>{post.title}</h3>
              <p><strong>Date:</strong> {post.date}</p>
              <p>{post.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Blog;