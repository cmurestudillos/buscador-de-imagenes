import { useState, useCallback, useMemo, useEffect } from 'react';
import './assets/css/App.css';
import Header from './components/shared/Header';
import ListadoImagenes from './components/ListadoImagenes';
import Footer from './components/shared/Footer';
import Loading from './components/shared/Loading';
import EmptyState from './components/shared/EmptyState';
import usePixabayAPI from './hooks/usePixabayAPI';
import useDebounce from './hooks/useDebounce';

function App() {
  const [query, setQuery] = useState('Cat');
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedQuery = useDebounce(query, 400);

  const { images, loading, error, totalPages, totalHits, searchImages } = usePixabayAPI();

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

  const showPagination = useMemo(
    () => !loading && images.length > 0 && totalPages > 1,
    [loading, images.length, totalPages]
  );

  return (
    <div className="app">
      <Header onSearch={handleSearch} />

      <main className="main-content">
        {loading && <Loading />}

        {error && (
          <div className="error-container">
            <p className="error-message">❌ {error}</p>
          </div>
        )}

        {!loading && !error && images.length === 0 && debouncedQuery && (
          <EmptyState query={debouncedQuery} />
        )}

        {!loading && !error && images.length > 0 && (
          <>
            <div className="results-info">
              <p>
                Se encontraron {totalHits.toLocaleString()} imágenes para &quot;{debouncedQuery}
                &quot;
              </p>
            </div>

            <ListadoImagenes imagenes={images} />

            {showPagination && (
              <div className="pagination">
                <button
                  className="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}>
                  ← Anterior
                </button>

                <span className="page-info">
                  Página {currentPage} de {totalPages}
                </span>

                <button
                  className="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}>
                  Siguiente →
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
