import React, { useEffect } from 'react';
import { hotjarConfigInit } from './hotjar';

const HotjarProvider: React.FC = () => {

  useEffect(() => {
    hotjarConfigInit();
  }, []);

  return <React.Fragment />;
}

export default HotjarProvider;