import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Selector = ({
  id,
  options,
  labelKey,
  valueKey,
  selected,
  onChange,
}) => (
  <select
    id={id}
    className="custom-select"
    data-testid="custom-select"
    value={selected}
    onChange={(event) => onChange(event?.target?.value)}
  >
    <option label="Seleccionar" value="" />
    {options.map((option) => (
      <option
        key={option[valueKey]}
        value={option[valueKey]}
      >
        {option[labelKey]}
      </option>
    ))}
  </select>
);

Selector.defaultProps = {
  id: null,
  labelKey: 'name',
  options: [],
  selected: '',
  valueKey: 'id',
};

Selector.propTypes = {
  id: PropTypes.string,
  labelKey: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string,
  valueKey: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Selector;
