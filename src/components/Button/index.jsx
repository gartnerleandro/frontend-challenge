import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const BUTTON_TYPES = {
  primary: 'primary',
  transparent: 'transparent',
};

const Button = ({
  type,
  text,
  onClick,
  disabled,
  className,
}) => (
  <button
    className={`btn ${type} ${className}`}
    type="button"
    onClick={onClick}
    data-testid="custom-button"
    disabled={disabled}
  >
    {text}
  </button>
);

Button.defaultProps = {
  className: '',
  disabled: false,
  text: '',
  type: BUTTON_TYPES.primary,
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES).map((type) => type)),
};

export default Button;
