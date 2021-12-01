import { render, screen } from '@testing-library/react';
import App from './App';

test('Deve renderizar o componente sem erros', () => {
  render(<App />);
  const linkElement = screen.getByText(/conversor de moedas/i);
  expect(linkElement).toBeInTheDocument();
});
