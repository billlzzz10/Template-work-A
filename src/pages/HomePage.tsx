import React from 'react';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to My React App</h1>
      <p>This is a template React application with TypeScript, React Router, and more.</p>
      
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>TypeScript Integration</li>
          <li>Component-Based Architecture</li>
          <li>React Router for Navigation</li>
          <li>ESLint and Prettier for Code Quality</li>
          <li>Responsive Design</li>
        </ul>
      </section>
      
      <section className="getting-started">
        <h2>Getting Started</h2>
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <button className="primary-button">Learn More</button>
      </section>
    </div>
  );
};

export default HomePage;