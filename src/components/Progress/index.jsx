import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Progress = ({ step }) => (
  <div className="custom-progress" data-testid="custom-progress">
    <div className="steps">
      <div className={`step-number ${step === 1 ? 'current' : ''}`} data-testid="first-step">
        <span className="circle-wrapper">
          1
        </span>
        Tu solicitud
      </div>
      <div className={`step-number ${step === 2 ? 'current' : ''}`} data-testid="second-step">
        <span className="circle-wrapper">
          2
        </span>
        Detalles
      </div>
      <div className={`step-number ${step === 3 ? 'current' : ''}`} data-testid="third-step">
        <span className="circle-wrapper">
          3
        </span>
        Tus datos
      </div>
    </div>
    <div
      className="progress-bar"
      style={{ width: `${step * 33}%` }}
    />
  </div>
);

Progress.defaultProps = {
  step: 1,
};

Progress.propTypes = {
  step: PropTypes.number,
};

export default Progress;
