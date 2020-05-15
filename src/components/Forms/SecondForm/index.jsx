import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Button, { BUTTON_TYPES } from '../../Button';
import Selector from '../../Selector';
import ErrorBox from '../../ErrorBox';

import getCategories from '../../../actions/category';

import { SET_CATEGORY, SET_SUBCATEGORY, SET_PRICE } from '../../../constants';

const priceOptions = [
  { value: 'Lo más barato' },
  { value: 'Relación calidad precio' },
  { value: 'Mejor calidad' },
];

const SecondForm = ({
  onNext,
  onPrev,
  onChange,
  category,
  subcategory,
  price,
}) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategories()
      .then((dbCategories) => {
        setCategories(dbCategories);
      })
      .catch(() => {
        setError('Ha ocurrido un error al conectar con el servidor, por favor recargue la página o inténtelo más tarde.');
      });
  }, []);

  useEffect(() => {
    if (category) {
      const currentCategory = categories.find((cat) => cat?.slug === category);
      setSubcategories(currentCategory?.children);
    }
  }, [category, categories]);

  return (
    <form data-testid="second-form" className="custom-form">
      <label htmlFor="category" className="label">
        Categoría *
      </label>
      <Selector
        id="category"
        valueKey="slug"
        options={categories}
        onChange={(value) => onChange(SET_CATEGORY, value)}
        selected={category}
      />
      {
        category && (
          <>
            <label htmlFor="subcategory" className="label">
              Subcategoría *
            </label>
            <Selector
              id="subcategory"
              valueKey="slug"
              onChange={(value) => onChange(SET_SUBCATEGORY, value)}
              options={subcategories}
              selected={subcategory}
            />
          </>
        )
      }
      <label htmlFor="price" className="label">
        Preferencia de precio
      </label>
      <Selector
        id="price"
        onChange={(value) => onChange(SET_PRICE, value)}
        labelKey="value"
        valueKey="value"
        options={priceOptions}
        selected={price}
      />
      <ErrorBox message={error} />
      <div className="footer">
        <Button text="« Volver" onClick={onPrev} type={BUTTON_TYPES.transparent} />
        <Button text="Continuar »" onClick={onNext} disabled={!category || !subcategory} />
      </div>
    </form>
  );
};

SecondForm.defaultProps = {
  category: '',
  price: '',
  subcategory: '',
};

SecondForm.propTypes = {
  category: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  price: PropTypes.string,
  subcategory: PropTypes.string,
};

export default SecondForm;
