import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

test('renders custom button element', () => {
  const { getByTestId, getByText } = render(<Button text="test button" onClick={() => true} />);
  const customButtonElement = getByTestId(/custom-button/i);
  const testButtonElement = getByText(/test button/i);
  expect(customButtonElement).toBeInTheDocument();
  expect(testButtonElement).toBeInTheDocument();
  expect(testButtonElement).toHaveClass('btn primary');
});

test('renders custom button element disabled', () => {
  const { getByTestId, getByText } = render(<Button text="test button" disabled onClick={() => true} />);
  const customButtonElement = getByTestId(/custom-button/i);
  const testButtonElement = getByText(/test button/i);
  expect(customButtonElement).toBeInTheDocument();
  expect(testButtonElement).toBeInTheDocument();
  expect(testButtonElement).toHaveAttribute('disabled');
});
