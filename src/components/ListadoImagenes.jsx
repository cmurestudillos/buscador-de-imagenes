import PropTypes from 'prop-types';
import Imagen from './Imagen';

const ListadoImagenes = ({imagenes}) => {
    return ( 
        <div className="card-grid">
            {imagenes.map(imagen => (
                <Imagen key={imagen.id} imagen={imagen} />
            ))}
        </div>
    );
}

ListadoImagenes.propTypes = {
    imagenes: PropTypes.array.isRequired
};
 
export default ListadoImagenes;