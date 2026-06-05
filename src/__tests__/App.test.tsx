import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

const mockImages = [
  { id: 1, tags: 'cat', previewURL: 'http://example.com/cat.jpg', largeImageURL: 'http://example.com/cat-large.jpg', likes: 10, views: 100 },
  { id: 2, tags: 'dog', previewURL: 'http://example.com/dog.jpg', largeImageURL: 'http://example.com/dog-large.jpg', likes: 20, views: 200 },
];

const mockFetchSuccess = () =>
  vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({ hits: mockImages, totalHits: 2 }),
  });

describe('App', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the search input', () => {
    vi.stubGlobal('fetch', mockFetchSuccess());
    render(<App />);
    expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument();
  });

  it('renders the Footer', () => {
    vi.stubGlobal('fetch', mockFetchSuccess());
    render(<App />);
    expect(screen.getByText(/Carlos Mur/i)).toBeInTheDocument();
  });

  it('shows Loading state while fetching', () => {
    vi.stubGlobal('fetch', vi.fn().mockReturnValue(new Promise(() => {})));
    render(<App />);
    expect(screen.getByText('Buscando imágenes...')).toBeInTheDocument();
  });

  it('shows image results after API resolves', async () => {
    vi.stubGlobal('fetch', mockFetchSuccess());
    render(<App />);
    await waitFor(() => {
      expect(screen.getByAltText('cat')).toBeInTheDocument();
      expect(screen.getByAltText('dog')).toBeInTheDocument();
    });
  });

  it('shows result count after API resolves', async () => {
    vi.stubGlobal('fetch', mockFetchSuccess());
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/imágenes para/i)).toBeInTheDocument();
    });
  });

  it('shows EmptyState when API returns no results', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ hits: [], totalHits: 0 }),
    }));
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('No se encontraron resultados')).toBeInTheDocument();
    });
  });
});
