import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the banking overview and navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /namaste, arjun/i })).toBeInTheDocument();
  expect(screen.getAllByText('₹24,680.50')).toHaveLength(2);
  expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /customers/i })).toHaveAttribute('href', '/customers');
});

test('navigates to activity without leaving the app', () => {
  render(<App />);
  userEvent.click(
    within(screen.getByRole('navigation', { name: /main navigation/i }))
      .getByRole('link', { name: /activity/i })
  );
  expect(screen.getByRole('heading', { name: /recent activity/i })).toBeInTheDocument();
  expect(screen.getByText('NEFT credit')).toBeInTheDocument();
  expect(screen.getByText('+₹85,000.00')).toBeInTheDocument();
});
