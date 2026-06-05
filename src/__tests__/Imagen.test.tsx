import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Imagen from '../components/Imagen';
import type { PixabayImage } from '../types';

const mockImagen: PixabayImage = {
  id: 1,
  tags: 'cat, nature',
  previewURL: 'https://example.com/cat-preview.jpg',
  largeImageURL: 'https://example.com/cat-large.jpg',
  likes: 42,
  views: 1500,
};

describe('Imagen', () => {
  it('renders the image with correct src and alt', () => {
    render(<Imagen imagen={mockImagen} />);
    const img = screen.getByAltText('cat, nature');
    expect(img).toHaveAttribute('src', mockImagen.previewURL);
  });

  it('renders likes count', () => {
    render(<Imagen imagen={mockImagen} />);
    expect(screen.getByText(/42/)).toBeInTheDocument();
  });

  it('renders views count', () => {
    render(<Imagen imagen={mockImagen} />);
    expect(screen.getByText(/1500/)).toBeInTheDocument();
  });

  it('renders "Ver Imagen" link pointing to largeImageURL', () => {
    render(<Imagen imagen={mockImagen} />);
    const link = screen.getByRole('link', { name: /ver imagen/i });
    expect(link).toHaveAttribute('href', mockImagen.largeImageURL);
    expect(link).toHaveAttribute('target', '_blank');
  });
});
