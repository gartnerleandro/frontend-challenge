import React from 'react';
import { render } from '@testing-library/react';
import ErrorBox from './index';

test('renders custom error element', () => {
  const { getByTestId, getByText } = render(<ErrorBox message="test error" />);

  const customErrorElement = getByTestId(/custom-error/i);
  const testErrorElement = getByText(/test error/i);

  expect(customErrorElement).toBeInTheDocument();
  expect(testErrorElement).toBeInTheDocument();
});
