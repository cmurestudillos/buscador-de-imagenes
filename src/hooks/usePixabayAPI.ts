import { useState, useCallback } from 'react';
import type { PixabayResponse, PixabayState } from '../types';

const IMAGES_PER_PAGE = 30;

const usePixabayAPI = () => {
  const [data, setData] = useState<PixabayState>({
    images: [],
    loading: false,
    error: null,
    totalPages: 0,
    totalHits: 0,
  });

  const searchImages = useCallback(async (query: string, page = 1) => {
    if (!query.trim()) return;

    setData(prev => ({ ...prev, loading: true, error: null }));

    try {
      const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&per_page=${IMAGES_PER_PAGE}&page=${page}&safesearch=true`
      );

      if (!response.ok) {
        throw new Error('Error al buscar imágenes');
      }

      const result = (await response.json()) as PixabayResponse;

      setData({
        images: result.hits,
        loading: false,
        error: null,
        totalPages: Math.ceil(result.totalHits / IMAGES_PER_PAGE),
        totalHits: result.totalHits,
      });
    } catch (err) {
      setData(prev => ({
        ...prev,
        loading: false,
        error: err instanceof Error ? err.message : 'Error desconocido',
      }));
    }
  }, []);

  return { ...data, searchImages };
};

export default usePixabayAPI;
