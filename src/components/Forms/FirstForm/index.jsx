import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../Input';
import Button from '../../Button';
import Selector from '../../Selector';

import { SET_DATE, SET_DESCRIPTION } from '../../../constants';

const dateOptions = [
  { value: 'Lo antes posible' },
  { value: 'De 1 a 3 meses' },
  { value: 'Más de 3 meses' },
];

const FirstForm = ({
  onNext,
  onChange,
  date,
  description,
}) => (
  <form data-testid="first-form" className="custom-form">
    <label htmlFor="date" className="label">
      Fecha estimada
    </label>
    <Selector
      id="date"
      labelKey="value"
      valueKey="value"
      selected={date}
      onChange={(value) => onChange(SET_DATE, value)}
      options={dateOptions}
    />
    <label htmlFor="description" className="label">
      Descripción *
    </label>
    <Input
      id="description"
      isTextarea
      onChange={(value) => onChange(SET_DESCRIPTION, value)}
      value={description}
    />
    <div className="footer">
      <Button text="Continuar »" onClick={onNext} disabled={!description} />
    </div>
  </form>
);

FirstForm.defaultProps = {
  date: '',
  description: '',
};

FirstForm.propTypes = {
  onNext: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default FirstForm;
