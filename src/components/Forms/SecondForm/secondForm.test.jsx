import React from 'react';
import { render, waitForElement, waitForDomChange } from '@testing-library/react';
import SecondForm from './index';

test('renders secondForm empty with next button disabled', async () => {
  const { getByTestId, getByText, queryByTestId } = render(
    <SecondForm
      onNext={() => true}
      onPrev={() => true}
      onChange={() => true}
    />,
  );

  // wait for gatCategories query
  await waitForDomChange();

  const formElement = getByTestId(/second-form/i);

  const categoryElement = getByText(/Categoría */i);

  const subcategoryElement = queryByTestId(/Subcategoría */i);

  const priceElement = getByText(/Preferencia de precio/i);

  const nextButtonElement = getByText(/Continuar »/i);
  const prevButtonElement = getByText(/« Volver/i);

  expect(formElement).toBeInTheDocument();

  expect(categoryElement).toBeInTheDocument();

  expect(priceElement).toBeInTheDocument();

  expect(subcategoryElement).not.toBeInTheDocument();

  expect(prevButtonElement).toBeInTheDocument();
  expect(nextButtonElement).toHaveAttribute('disabled');
});

test('renders secondForm completed with next button enabled', async () => {
  const { getByTestId, getByText, getByDisplayValue } = render(
    <SecondForm
      onNext={() => true}
      onPrev={() => true}
      onChange={() => true}
      category="instaladores"
      subcategory="calefaccion"
      price="Mejor calidad"
    />,
  );
  const formElement = getByTestId(/second-form/i);

  const categorySelector = await waitForElement(() => getByDisplayValue(/instaladores/i));
  const categoryElement = getByText(/Categoría */);

  const subcategoryElement = getByText(/Subcategoría */i);
  const subcategorySelector = await waitForElement(() => getByDisplayValue(/calefacción/i));

  const priceElement = getByText(/Preferencia de precio/i);
  const priceSelector = getByDisplayValue(/Mejor calidad/i);

  const nextButtonElement = getByText(/Continuar »/i);
  const prevButtonElement = getByText(/« Volver/i);

  expect(formElement).toBeInTheDocument();

  expect(categoryElement).toBeInTheDocument();
  expect(categorySelector).toBeInTheDocument();

  expect(subcategoryElement).toBeInTheDocument();
  expect(subcategorySelector).toBeInTheDocument();

  expect(priceElement).toBeInTheDocument();
  expect(priceSelector).toBeInTheDocument();

  expect(prevButtonElement).toBeInTheDocument();
  expect(nextButtonElement).not.toHaveAttribute('disabled');
});
