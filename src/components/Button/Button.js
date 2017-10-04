import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ label, priority, className, size, onClick }) => {
  const classes = classNames(
    'button',
    {
      [`button--${priority}`]: priority,
      [`button--size-${size}`]: size,
    },
    className,
  );

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  priority: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['default', 'small']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  priority: 'primary',
  onClick: () => {},
};

export default Button;
