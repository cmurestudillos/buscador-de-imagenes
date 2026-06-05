interface EmptyStateProps {
  query: string;
}

const EmptyState = ({ query }: EmptyStateProps) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon" aria-hidden="true">
        🔍
      </div>
      <h3>No se encontraron resultados</h3>
      <p>
        No encontramos imágenes para &ldquo;<strong>{query}</strong>&rdquo;
      </p>
      <p>Intenta con otros términos de búsqueda</p>
    </div>
  );
};

export default EmptyState;
