import React from 'react';
import { render } from '@testing-library/react';
import Progress from './index';

test('renders custom progress element', () => {
  const { getByTestId } = render(<Progress />);
  const customProgressElement = getByTestId(/custom-progress/i);
  const firstStep = getByTestId(/first-step/i);
  const secondStep = getByTestId(/second-step/i);
  const thirdStep = getByTestId(/third-step/i);

  expect(customProgressElement).toBeInTheDocument();
  expect(firstStep).toHaveClass('step-number current');
  expect(secondStep).not.toHaveClass('current');
  expect(thirdStep).not.toHaveClass('current');
});
