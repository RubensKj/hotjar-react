import React from 'react';
import { useState } from 'react';

import './styles.css';

const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  function incrementCount(): void {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Hello dear!!</h1>
        <p>Hotjar has been configured!!</p>
        {count && (
          <React.Fragment>
            <p>Count will be shown in HotJar</p>
            <p className="count">{count}</p>
          </React.Fragment>
        )}
        <button onClick={incrementCount}>Test a Cool Button for <strong>Heatmap</strong></button>
      </div>
    </div>
  );
}

export default Home;