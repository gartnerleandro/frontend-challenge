import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders full page', () => {
  const { getByTestId } = render(<App />);
  const navbarElement = getByTestId(/custom-navbar/i);
  const appHeader = getByTestId(/app-header/i);
  const appContent = getByTestId(/app-content/i);
  const formsElement = getByTestId(/forms-wrapper/i);

  expect(navbarElement).toBeInTheDocument();
  expect(appHeader).toBeInTheDocument();
  expect(appContent).toBeInTheDocument();
  expect(formsElement).toBeInTheDocument();
});
