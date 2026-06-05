import type { PixabayImage } from '../types';
import Imagen from './Imagen';

interface ListadoImagenesProps {
  imagenes: PixabayImage[];
}

const ListadoImagenes = ({ imagenes }: ListadoImagenesProps) => {
  return (
    <div className="card-grid">
      {imagenes.map(imagen => (
        <Imagen key={imagen.id} imagen={imagen} />
      ))}
    </div>
  );
};

export default ListadoImagenes;
