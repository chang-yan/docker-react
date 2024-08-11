import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Hi There! I am a React App running on Docker!/i,
  );

  expect(linkElement).toBeInTheDocument();
});
