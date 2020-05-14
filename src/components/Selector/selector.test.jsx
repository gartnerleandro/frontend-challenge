import React from 'react';
import { render } from '@testing-library/react';
import Selector from './index';

test('renders custom select element', () => {
  const options = [
    {
      id: 1,
      name: 'option 1',
    },
    {
      id: 2,
      name: 'option 2',
    },
  ];
  const { getByTestId, getByText } = render(<Selector onChange={() => true} options={options} />);
  const customSelectElement = getByTestId(/custom-select/i);
  const firstOption = getByText(/option 1/i);
  const secondOption = getByText(/option 2/i);
  expect(customSelectElement).toBeInTheDocument();
  expect(firstOption).toBeInTheDocument();
  expect(secondOption).toBeInTheDocument();
});
