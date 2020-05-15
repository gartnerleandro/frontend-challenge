import React from 'react';
import { render, waitForDomChange, waitForElement } from '@testing-library/react';
import ThirdForm from './index';

test('renders thirdForm empty with next button disabled', () => {
  const { getByTestId, getByText } = render(
    <ThirdForm
      onNext={() => true}
      onPrev={() => true}
      onChange={() => true}
    />,
  );

  const formElement = getByTestId(/third-form/i);

  const nameElement = getByText(/Nombre */i);
  const emailElement = getByText(/Email */i);
  const telephoneElement = getByText(/Teléfono */i);

  const nextButtonElement = getByText(/Continuar »/i);
  const prevButtonElement = getByText(/« Volver/i);

  expect(formElement).toBeInTheDocument();

  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(telephoneElement).toBeInTheDocument();

  expect(prevButtonElement).toBeInTheDocument();
  expect(nextButtonElement).toHaveAttribute('disabled');
});

test('renders thirdForm completed with next button enabled', async () => {
  const { getByTestId, getByText, getByDisplayValue } = render(
    <ThirdForm
      onNext={() => true}
      onPrev={() => true}
      onChange={() => true}
      name="test"
      email="test@test.com"
      telephone="123456789"
    />,
  );

  // wait for validateEmail query
  await waitForDomChange();

  const formElement = getByTestId(/third-form/i);

  const nameElement = getByText(/Nombre */i);
  const nameInput = getByDisplayValue(/test$/i);

  const emailElement = getByText(/Email */i);
  const emailInput = getByDisplayValue(/test@test.com/i);

  const telephoneElement = getByText(/Teléfono */i);
  const telephoneInput = getByDisplayValue(/123456789/i);

  const nextButtonElement = getByText(/Continuar »/i);
  const prevButtonElement = getByText(/« Volver/i);

  expect(formElement).toBeInTheDocument();

  expect(nameElement).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();

  expect(emailElement).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();

  expect(telephoneElement).toBeInTheDocument();
  expect(telephoneInput).toBeInTheDocument();

  expect(prevButtonElement).toBeInTheDocument();
  expect(nextButtonElement).not.toHaveAttribute('disabled');
});

test('renders thirdForm completed with error due to hotmail domain email', async () => {
  const {
    getByTestId, getByText, getByDisplayValue,
  } = render(
    <ThirdForm
      onNext={() => true}
      onPrev={() => true}
      onChange={() => true}
      name="test"
      email="test@hotmail.com"
      telephone="123456789"
    />,
  );

  const formElement = getByTestId(/third-form/i);

  const nameElement = getByText(/Nombre */i);
  const nameInput = getByDisplayValue(/test$/i);

  const emailElement = getByText(/Email */);
  const emailInput = getByDisplayValue(/test@hotmail.com/i);
  const errorText = await waitForElement(() => getByText(/Por favor, introduzca un email válido./i));

  const telephoneElement = getByText(/Teléfono */i);
  const telephoneInput = getByDisplayValue(/123456789/i);

  const nextButtonElement = getByText(/Continuar »/i);
  const prevButtonElement = getByText(/« Volver/i);

  expect(formElement).toBeInTheDocument();

  expect(nameElement).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();

  expect(emailElement).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(errorText).toBeInTheDocument();

  expect(telephoneElement).toBeInTheDocument();
  expect(telephoneInput).toBeInTheDocument();

  expect(prevButtonElement).toBeInTheDocument();
  expect(nextButtonElement).toHaveAttribute('disabled');
});
