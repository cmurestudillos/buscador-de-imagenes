export interface PixabayImage {
  id: number;
  tags: string;
  previewURL: string;
  largeImageURL: string;
  likes: number;
  views: number;
}

export interface PixabayResponse {
  hits: PixabayImage[];
  totalHits: number;
}

export interface PixabayState {
  images: PixabayImage[];
  loading: boolean;
  error: string | null;
  totalPages: number;
  totalHits: number;
}
