import { useState, useEffect, useCallback } from 'react';

const usePixabayAPI = () => {
  const [data, setData] = useState({
    images: [],
    loading: false,
    error: null,
    totalPages: 0,
    totalHits: 0,
  });

  const searchImages = useCallback(async (query, page = 1) => {
    if (!query.trim()) return;

    setData(prev => ({ ...prev, loading: true, error: null }));

    try {
      const IMAGES_PER_PAGE = 30;
      const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&per_page=${IMAGES_PER_PAGE}&page=${page}&safesearch=true`
      );

      if (!response.ok) {
        throw new Error('Error al buscar imágenes');
      }

      const result = await response.json();

      setData({
        images: result.hits,
        loading: false,
        error: null,
        totalPages: Math.ceil(result.totalHits / IMAGES_PER_PAGE),
        totalHits: result.totalHits,
      });
    } catch (error) {
      setData(prev => ({
        ...prev,
        loading: false,
        error: error.message,
      }));
    }
  }, []);

  return { ...data, searchImages };
};

export default usePixabayAPI;
