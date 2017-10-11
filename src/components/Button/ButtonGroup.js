import React from 'react';

import './ButtonGroup.css';

const ButtonGroup = ({ children }) => {
  return (
    <div className="button-group">
      {children}
    </div>
  );
};

export default ButtonGroup;

