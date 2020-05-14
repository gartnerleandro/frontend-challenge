import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const BUTTON_TYPES = {
  primary: 'primary',
  transparent: 'transparent',
};

const Button = ({
  type, text, onClick, disabled,
}) => (
  <button
    className={`btn ${type}`}
    type="button"
    onClick={onClick}
    data-testid="custom-button"
    disabled={disabled}
  >
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
  text: '',
  type: BUTTON_TYPES.primary,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES).map((type) => type)),
};

export default Button;
