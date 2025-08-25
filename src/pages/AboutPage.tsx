import React from 'react';
import '../styles/AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About This App</h1>
      <p>
        This is a template React application built with modern best practices.
        It includes TypeScript for type safety, React Router for navigation,
        and a clean component structure.
      </p>
      
      <section className="technologies">
        <h2>Technologies Used</h2>
        <ul>
          <li>React 18</li>
          <li>TypeScript</li>
          <li>React Router</li>
          <li>ESLint & Prettier</li>
          <li>CSS Modules</li>
        </ul>
      </section>
      
      <section className="team">
        <h2>Our Team</h2>
        <p>
          This template was created to help developers quickly bootstrap
          React applications with a solid foundation and best practices.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;