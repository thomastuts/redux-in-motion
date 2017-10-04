import React from 'react';
import PropTypes from 'prop-types';

import './Panel.css';

const Panel = ({ title, children }) => {
  return (
    <div className="panel">
      <div className="panel__title">{title}</div>
      <div className="panel__content">{children}</div>
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Panel.defaultProps = {

};

export default Panel;
