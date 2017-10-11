import React from 'react';

import './Grid.css';

export const Row = ({ children }) => {
  return (
    <div className="grid-row">
      {children}
    </div>
  );
};

export const Column = ({ children, size }) => {
  return (
    <div className="grid-col" style={{ flex: size }}>
      {children}
    </div>
  );
};

Column.defaultProps = {
  size: '1',
};
