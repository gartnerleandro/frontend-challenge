import React from 'react';
import { render } from '@testing-library/react';
import FirstForm from './index';

test('renders firstForm empty with next button disabled', () => {
  const { getByTestId, getByText } = render(
    <FirstForm
      onNext={() => true}
      onChange={() => true}
    />,
  );
  const formElement = getByTestId(/first-form/i);
  const dateElement = getByText(/Fecha estimada/i);
  const descriptionElement = getByText(/Descripción */i);
  const buttonElement = getByText(/Continuar »/i);

  expect(formElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute('disabled');
});

test('renders firstForm completed with next button enabled', () => {
  const { getByTestId, getByText, getByDisplayValue } = render(
    <FirstForm
      onNext={() => true}
      onChange={() => true}
      date="Lo antes posible"
      description="Test description"
    />,
  );
  const formElement = getByTestId(/first-form/i);
  const dateElement = getByText(/Fecha estimada/i);
  const dateSelector = getByDisplayValue(/Lo antes posible/i);
  const descriptionElement = getByText(/Descripción */i);
  const descriptionInput = getByDisplayValue(/Test description/i);
  const buttonElement = getByText(/Continuar »/i);

  expect(formElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
  expect(dateSelector).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(buttonElement).not.toHaveAttribute('disabled');
});
