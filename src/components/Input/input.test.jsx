import React from 'react';
import { render } from '@testing-library/react';
import Input from './index';

test('renders custom input element', () => {
  const { getByTestId } = render(<Input />);
  const customInputElement = getByTestId(/custom-input/i);
  expect(customInputElement).toBeInTheDocument();
});

test('renders custom input element with an error', () => {
  const { getByTestId, getByText } = render(<Input errorText="test error" error />);
  const customInputElement = getByTestId(/custom-input/i);
  const errorTextElement = getByText(/test error/i);
  expect(customInputElement).toBeInTheDocument();
  expect(errorTextElement).toBeInTheDocument();
});
