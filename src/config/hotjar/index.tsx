import React, { useEffect } from 'react';
import { hotjarConfigInit } from './hotjar';

const HotjarProvider: React.FC = () => {

  useEffect(() => {
    hotjarConfigInit();
  }, []);

  return <div />;
}

export default HotjarProvider;