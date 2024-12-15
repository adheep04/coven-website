import React from 'react';
import { render, screen, test } from '@testing-library/react';
import App from './App';
import { expect } from '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
