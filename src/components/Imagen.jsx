import PropTypes from 'prop-types';

const Imagen = ({ imagen }) => {
    const { largeImageURL, likes, previewURL, tags, views } = imagen;

    return ( 
        <div className="card-style">
            <img src={previewURL} className="image-style" alt={tags} />
            <div className="card-content">
                <p> 👍🏼 {likes} Me Gusta /  👁️ {views} Vistas</p>
            </div>
            <div className="card-bottom">
                <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className='button'>Ver Imagen</a>
            </div>
        </div>
    );    
};

Imagen.propTypes = {
    imagen: PropTypes.object.isRequired
};

export default Imagen;