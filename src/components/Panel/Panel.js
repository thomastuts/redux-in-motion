import React from 'react';

import './Panel.css';

const Panel = ({ title, children }) => {
  return (
    <div className="panel">
      <div className="panel__title">{title}</div>
      <div className="panel__content">{children}</div>
    </div>
  );
};

export default Panel;
