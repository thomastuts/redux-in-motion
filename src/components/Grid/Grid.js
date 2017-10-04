import React from 'react';
import PropTypes from 'prop-types';

import './Grid.css';

export const Row = ({ children }) => {
  return (
    <div className="grid-row">
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

Row.defaultProps = {};

export const Column = ({ children, size }) => {
  return (
    <div className="grid-col" style={{ flex: size }}>
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
};

Column.defaultProps = {
  size: '1',
};
