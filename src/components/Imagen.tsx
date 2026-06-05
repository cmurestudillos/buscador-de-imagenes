import { Heart, Eye, ExternalLink } from 'lucide-react';
import type { PixabayImage } from '../types';

interface ImagenProps {
  imagen: PixabayImage;
}

const Imagen = ({ imagen }: ImagenProps) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;

  const tagList = tags
    .split(',')
    .map(t => t.trim())
    .filter(Boolean)
    .slice(0, 3);

  return (
    <article className="card-style">
      <div className="card-image-wrap">
        <img src={previewURL} loading="lazy" className="image-style" alt={tags} />
      </div>

      <div className="card-body">
        <div className="card-tags">
          {tagList.map(tag => (
            <span key={tag} className="card-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="card-footer">
          <div className="card-stats">
            <span className="card-stat">
              <Heart size={13} />
              {likes}
            </span>
            <span className="card-stat">
              <Eye size={13} />
              {views}
            </span>
          </div>

          <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card">
            Ver Imagen
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Imagen;
