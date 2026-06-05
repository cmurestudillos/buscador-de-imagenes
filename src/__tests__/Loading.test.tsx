import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loading from '../components/shared/Loading';

describe('Loading', () => {
  it('renders loading text', () => {
    render(<Loading />);
    expect(screen.getByText('Buscando imágenes...')).toBeInTheDocument();
  });

  it('renders spinner element', () => {
    const { container } = render(<Loading />);
    expect(container.querySelector('.loading-spinner')).toBeInTheDocument();
  });
});
