import React from 'react';
import PropTypes from 'prop-types';

import './ButtonGroup.css';

const ButtonGroup = ({ children }) => {
  return (
    <div className="button-group">
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

ButtonGroup.defaultProps = {

};

export default ButtonGroup;

