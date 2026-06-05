import type { PixabayImage } from '../types';

interface ImagenProps {
  imagen: PixabayImage;
}

const Imagen = ({ imagen }: ImagenProps) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;

  return (
    <div className="card-style">
      <img src={previewURL} loading="lazy" className="image-style" alt={tags} />
      <div className="card-content">
        <p>
          👍🏼 {likes} Me Gusta / 👁️ {views} Vistas
        </p>
      </div>
      <div className="card-bottom">
        <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="button">
          Ver Imagen
        </a>
      </div>
    </div>
  );
};

export default Imagen;
