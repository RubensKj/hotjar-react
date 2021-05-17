import React from 'react';

import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Hello dear!!</h1>
        <p>Hotjar has been configured!!</p>
        <button>Test a Cool Button for <strong>Heatmap</strong></button>
      </div>
    </div>
  );
}

export default Home;