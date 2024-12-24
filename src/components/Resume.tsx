import React from 'react';

const Resume: React.FC = () => {
  return (
    <main>
      <section>
        <h2>My Resume</h2>
        <p>
          Below is a summary of my professional experience, accomplishments, and skills.
        </p>
        <a href="/assets/venkat_resume.pdf" download className="button">
          Download Resume
        </a>
        <ul>
          <li><strong>Current Role:</strong> Engineering Assistant Director, DriveTime Automotive</li>
          <li><strong>Skills:</strong> Lean Architecture, Automation, Scalable Systems, Cloud Solutions</li>
          <li><strong>Experience:</strong> 18 years in software development, 5+ years in leadership roles</li>
        </ul>
      </section>
    </main>
  );
};

export default Resume;