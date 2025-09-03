import PropTypes from 'prop-types';

const EmptyState = ({ query }) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">🔍</div>
      <h3>No se encontraron resultados</h3>
      <p>No encontramos imágenes para "{query}"</p>
      <p>Intenta con otros términos de búsqueda</p>
    </div>
  );
};

EmptyState.propTypes = {
  query: PropTypes.string.isRequired,
};

export default EmptyState;
