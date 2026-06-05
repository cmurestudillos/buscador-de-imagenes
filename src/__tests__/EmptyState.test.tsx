import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import EmptyState from '../components/shared/EmptyState';

describe('EmptyState', () => {
  it('renders the query in the message', () => {
    render(<EmptyState query="gatitos" />);
    expect(screen.getByText(/gatitos/i)).toBeInTheDocument();
  });

  it('renders the h3 heading', () => {
    render(<EmptyState query="test" />);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('renders help text', () => {
    render(<EmptyState query="test" />);
    expect(screen.getByText(/otros términos de búsqueda/i)).toBeInTheDocument();
  });
});
