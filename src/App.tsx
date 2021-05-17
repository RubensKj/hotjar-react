import React from 'react';

import HotjarProvider from './config/hotjar';
import Home from './pages/Home';

import './styles/styles.css';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HotjarProvider />
      <Home />
    </React.Fragment>
  );
}

export default App;