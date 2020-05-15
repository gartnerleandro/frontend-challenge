import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const ErrorBox = ({ message }) => message && (
  <div className="error-box" data-testid="custom-error">
    {message}
  </div>
);

ErrorBox.defaultProps = {
  message: '',
};

ErrorBox.propTypes = {
  message: PropTypes.string,
};

export default ErrorBox;
