import { useState, useCallback, useMemo, useEffect } from 'react';
import './assets/css/App.css';
import Header from './components/shared/Header';
import ListadoImagenes from './components/ListadoImagenes';
import Footer from './components/shared/Footer';
import Loading from './components/shared/Loading';
import EmptyState from './components/shared/EmptyState';
import Error from './components/shared/Error';
import usePixabayAPI from './hooks/usePixabayAPI';
import useDebounce from './hooks/useDebounce';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Theme = 'light' | 'dark';

const POPULAR_SEARCHES = [
  { emoji: '🌿', label: 'naturaleza' },
  { emoji: '🏙️', label: 'ciudad' },
  { emoji: '🐾', label: 'animales' },
  { emoji: '🌸', label: 'flores' },
  { emoji: '🏔️', label: 'montaña' },
  { emoji: '🎨', label: 'arte' },
  { emoji: '🏖️', label: 'playa' },
  { emoji: '🍕', label: 'comida' },
];

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('piximg-theme') as Theme | null;
  if (saved === 'light' || saved === 'dark') return saved;
  if (typeof window.matchMedia !== 'function') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const [query, setQuery] = useState('Cat');
  const [currentPage, setCurrentPage] = useState(1);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const debouncedQuery = useDebounce(query, 400);

  const { images, loading, error, totalPages, totalHits, searchImages } = usePixabayAPI();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('piximg-theme', theme);
  }, [theme]);

  useEffect(() => {
    searchImages(debouncedQuery, currentPage);
  }, [searchImages, debouncedQuery, currentPage]);

  const handleSearch = useCallback((newQuery: string) => {
    setQuery(newQuery);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const showPagination = useMemo(
    () => !loading && images.length > 0 && totalPages > 1,
    [loading, images.length, totalPages]
  );

  return (
    <div className="app">
      <Header onSearch={handleSearch} theme={theme} onThemeToggle={toggleTheme} />

      <main className="main-content">
        {loading && <Loading />}

        {!loading && error && <Error mensaje={error} />}

        {!loading && !error && images.length === 0 && debouncedQuery && (
          <EmptyState query={debouncedQuery} />
        )}

        {!loading && !error && images.length > 0 && (
          <>
            <div className="results-header">
              <p className="results-info">
                <strong>{totalHits.toLocaleString()}</strong>{' '}
                imágenes para{' '}
                <span className="results-query">&ldquo;{debouncedQuery}&rdquo;</span>
              </p>

              <div className="popular-tags">
                <span className="popular-label">Explorar:</span>
                {POPULAR_SEARCHES.map(({ emoji, label }) => (
                  <button
                    key={label}
                    className="tag-chip"
                    onClick={() => handleSearch(label)}
                    type="button">
                    {emoji} {label}
                  </button>
                ))}
              </div>
            </div>

            <ListadoImagenes imagenes={images} />

            {showPagination && (
              <div className="pagination">
                <button
                  className="btn-page"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Página anterior">
                  <ChevronLeft size={16} />
                  Anterior
                </button>

                <span className="page-info">
                  Página {currentPage} de {totalPages}
                </span>

                <button
                  className="btn-page"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Página siguiente">
                  Siguiente
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
