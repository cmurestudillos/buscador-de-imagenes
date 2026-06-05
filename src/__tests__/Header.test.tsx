import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/shared/Header';

describe('Header', () => {
  it('renders the PIXIMG logo text', () => {
    render(<Header onSearch={vi.fn()} />);
    expect(screen.getByText('PIXIMG')).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(<Header onSearch={vi.fn()} />);
    expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument();
  });

  it('shows validation error when submitting empty input', async () => {
    const user = userEvent.setup();
    render(<Header onSearch={vi.fn()} />);
    await user.click(screen.getByRole('button', { name: /buscar/i }));
    expect(screen.getByText('Agrega un término de búsqueda')).toBeInTheDocument();
  });

  it('does not call onSearch when input is empty', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<Header onSearch={onSearch} />);
    await user.click(screen.getByRole('button', { name: /buscar/i }));
    expect(onSearch).not.toHaveBeenCalled();
  });

  it('calls onSearch while typing', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<Header onSearch={onSearch} />);
    await user.type(screen.getByPlaceholderText('Buscar...'), 'cat');
    expect(onSearch).toHaveBeenLastCalledWith('cat');
  });

  it('calls onSearch on Enter key', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<Header onSearch={onSearch} />);
    const input = screen.getByPlaceholderText('Buscar...');
    await user.type(input, 'dogs');
    await user.keyboard('{Enter}');
    expect(onSearch).toHaveBeenLastCalledWith('dogs');
  });

  it('calls onSearch on button click', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<Header onSearch={onSearch} />);
    await user.type(screen.getByPlaceholderText('Buscar...'), 'flowers');
    await user.click(screen.getByRole('button', { name: /buscar/i }));
    expect(onSearch).toHaveBeenLastCalledWith('flowers');
  });
});
