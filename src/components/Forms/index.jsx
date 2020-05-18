import React, { useState, useReducer } from 'react';

import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';
import Progress from '../Progress';

import {
  SET_DATE,
  SET_DESCRIPTION,
  SET_CATEGORY,
  SET_SUBCATEGORY,
  SET_PRICE,
  SET_NAME,
  SET_EMAIL,
  SET_TELEPHONE,
} from '../../constants';

import './index.scss';

const initialState = {
  date: '',
  description: '',
  category: '',
  subcategory: '',
  price: '',
  name: '',
  email: '',
  telephone: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case SET_DATE:
      return { ...state, date: action.value };
    case SET_DESCRIPTION:
      return { ...state, description: action.value };
    case SET_CATEGORY:
      return { ...state, category: action.value };
    case SET_SUBCATEGORY:
      return { ...state, subcategory: action.value };
    case SET_PRICE:
      return { ...state, price: action.value };
    case SET_NAME:
      return { ...state, name: action.value };
    case SET_EMAIL:
      return { ...state, email: action.value };
    case SET_TELEPHONE:
      return { ...state, telephone: action.value };
    default:
      return state;
  }
};

const Forms = () => {
  const [step, setStep] = useState(1);
  const [form, dispatch] = useReducer(formReducer, initialState);

  const onNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const onPrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onChange = (key, value) => dispatch({ type: key, value });

  return (
    <div className="forms-wrapper" data-testid="forms-wrapper">
      <div className="form-header">
        <div className="title">
          Solicita presupuestos
        </div>
        <div className="free">
          ¡Es gratis!
        </div>
      </div>
      {
        step > 0 && step < 4 && (
          <Progress step={step} />
        )
      }
      {
        step === 1 && (
          <FirstForm
            onChange={onChange}
            onNext={onNext}
            date={form?.date}
            description={form?.description}
          />
        )
      }
      {
        step === 2 && (
          <SecondForm
            onChange={onChange}
            onNext={onNext}
            onPrev={onPrev}
            category={form?.category}
            subcategory={form?.subcategory}
            price={form?.price}
          />
        )
      }
      {
        step === 3 && (
          <ThirdForm
            onChange={onChange}
            onNext={onNext}
            onPrev={onPrev}
            name={form?.name}
            email={form?.email}
            telephone={form?.telephone}
          />
        )
      }
      {
        step === 4 && (
          <div className="end-message" data-testid="third-form">
            <i className="fas fa-check done-icon" />
            <h2>Presupuesto recibido</h2>
          </div>
        )
      }
    </div>
  );
};

export default Forms;
