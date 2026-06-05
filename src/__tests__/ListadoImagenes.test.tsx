import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ListadoImagenes from '../components/ListadoImagenes';
import type { PixabayImage } from '../types';

const mockImagenes: PixabayImage[] = [
  { id: 1, tags: 'cat', previewURL: 'http://cat.jpg', largeImageURL: 'http://cat-large.jpg', likes: 10, views: 100 },
  { id: 2, tags: 'dog', previewURL: 'http://dog.jpg', largeImageURL: 'http://dog-large.jpg', likes: 20, views: 200 },
  { id: 3, tags: 'bird', previewURL: 'http://bird.jpg', largeImageURL: 'http://bird-large.jpg', likes: 30, views: 300 },
];

describe('ListadoImagenes', () => {
  it('renders the correct number of image cards', () => {
    render(<ListadoImagenes imagenes={mockImagenes} />);
    expect(screen.getAllByRole('link', { name: /ver imagen/i })).toHaveLength(3);
  });

  it('renders each image with its tags as alt text', () => {
    render(<ListadoImagenes imagenes={mockImagenes} />);
    expect(screen.getByAltText('cat')).toBeInTheDocument();
    expect(screen.getByAltText('dog')).toBeInTheDocument();
    expect(screen.getByAltText('bird')).toBeInTheDocument();
  });

  it('renders nothing when array is empty', () => {
    const { container } = render(<ListadoImagenes imagenes={[]} />);
    expect(container.querySelector('.card-style')).not.toBeInTheDocument();
  });
});
