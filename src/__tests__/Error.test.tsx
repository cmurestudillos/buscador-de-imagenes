import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Error from '../components/shared/Error';

describe('Error', () => {
  it('renders the mensaje prop', () => {
    render(<Error mensaje="Algo salió mal" />);
    expect(screen.getByText('Algo salió mal')).toBeInTheDocument();
  });

  it('applies errorMsg CSS class', () => {
    const { container } = render(<Error mensaje="Error de prueba" />);
    expect(container.querySelector('.errorMsg')).toBeInTheDocument();
  });
});
