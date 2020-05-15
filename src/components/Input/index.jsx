import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const INPUT_TYPES = {
  email: 'email',
  text: 'text',
};

const Input = ({
  disabled,
  error,
  errorText,
  isTextarea,
  maxLength,
  onChange,
  placeholder,
  type,
  value,
  rows,
  min,
  max,
  id,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const onInputChange = (newValue) => {
    onChange(newValue);
    setInputValue(newValue);
  };

  return (
    <div className="custom-input" data-testid="custom-input">
      {
        isTextarea ? (
          <textarea
            id={id}
            data-testid="textarea"
            disabled={disabled}
            maxLength={maxLength}
            onChange={(event) => onInputChange(event?.target?.value)}
            placeholder={placeholder}
            rows={rows}
            type={type}
            value={inputValue}
          />
        ) : (
          <input
            id={id}
            data-testid="input"
            disabled={disabled}
            maxLength={maxLength}
            onChange={(event) => onInputChange(event?.target?.value)}
            placeholder={placeholder}
            type={type}
            value={inputValue}
            min={min}
            max={max}
            className={error ? 'input-error' : ''}
          />
        )
      }
      {error && errorText && <p className="input-error-text" data-testid="input-error-text">{errorText}</p>}
    </div>
  );
};

Input.defaultProps = {
  disabled: false,
  error: false,
  errorText: null,
  isTextarea: false,
  maxLength: null,
  onChange: () => true,
  placeholder: '',
  rows: 5,
  type: INPUT_TYPES.text,
  value: '',
  min: null,
  max: null,
  id: null,
};

Input.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  isTextarea: PropTypes.bool,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  type: PropTypes.oneOf(Object.values(INPUT_TYPES).map((type) => type)),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Input;
