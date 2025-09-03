import { useState, useCallback, useMemo, useEffect } from 'react';
import './assets/css/App.css';
import Header from './components/shared/Header';
import ListadoImagenes from './components/ListadoImagenes';
import Footer from './components/shared/Footer';
import Loading from './components/shared/Loading';
import EmptyState from './components/shared/EmptyState';
import usePixabayAPI from './hooks/usePixabayAPI';

function App() {
  const [query, setQuery] = useState('Cat');
  const [currentPage, setCurrentPage] = useState(1);

  const { images, loading, error, totalPages, totalHits, searchImages } = usePixabayAPI();

  useEffect(() => {
    searchImages(query, currentPage);
  }, [searchImages, query, currentPage]);

  const handleSearch = useCallback(newQuery => {
    setQuery(newQuery);
    setCurrentPage(1);
    // No llamamos searchImages aquí porque useEffect lo manejará automáticamente
  }, []);

  const handlePageChange = useCallback(newPage => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // No llamamos searchImages aquí porque useEffect lo manejará automáticamente
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

        {!loading && !error && images.length === 0 && query && <EmptyState query={query} />}

        {!loading && !error && images.length > 0 && (
          <>
            <div className="results-info">
              <p>
                Se encontraron {totalHits.toLocaleString()} imágenes para "{query}"
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
