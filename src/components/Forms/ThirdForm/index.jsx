import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Button, { BUTTON_TYPES } from '../../Button';
import Input from '../../Input';

import validateEmail from '../../../actions/email';

import { SET_NAME, SET_EMAIL, SET_TELEPHONE } from '../../../constants';

const ThirdForm = ({
  onNext,
  onPrev,
  onChange,
  email,
  name,
  telephone,
}) => {
  const [isValidEmail, setIsValidEmail] = useState(undefined);
  const [inputEmail, setInputEmail] = useState('');

  const checkEmail = useCallback(() => {
    if (inputEmail) {
      validateEmail(inputEmail)
        .then(({ isValid }) => {
          setIsValidEmail(isValid);
        })
        .catch(() => {

        });
    }
  }, [inputEmail]);

  useEffect(() => {
    let timer = null;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => checkEmail(), 500);

    onChange(SET_EMAIL, inputEmail);

    return () => clearTimeout(timer);
  }, [inputEmail]);

  useEffect(() => {
    if (email !== inputEmail) {
      setInputEmail(email);
    }
  }, [email]);

  return (
    <form data-testid="third-form" className="custom-form">
      <label htmlFor="name" className="label">
        Nombre *
      </label>
      <Input
        id="name"
        value={name}
        onChange={(value) => onChange(SET_NAME, value)}
      />
      <label htmlFor="email" className="label">
        Email *
      </label>
      <Input
        id="email"
        onChange={setInputEmail}
        value={email}
        error={(!!inputEmail || !!email) && !isValidEmail}
        errorText="Por favor, introduzca un email válido."
      />
      <label htmlFor="telephone" className="label">
        Teléfono *
      </label>
      <Input
        id="telephone"
        onChange={(value) => onChange(SET_TELEPHONE, value)}
        value={telephone}
      />
      <div className="footer">
        <Button text="« Volver" onClick={onPrev} type={BUTTON_TYPES.transparent} />
        <Button
          text="Continuar »"
          onClick={onNext}
          disabled={!name || !email || !telephone || !isValidEmail}
        />
      </div>
    </form>
  );
};

ThirdForm.defaultProps = {
  email: '',
  name: '',
  telephone: '',
};

ThirdForm.propTypes = {
  email: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  name: PropTypes.string,
  telephone: PropTypes.string,
};

export default ThirdForm;
