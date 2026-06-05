interface EmptyStateProps {
  query: string;
}

const EmptyState = ({ query }: EmptyStateProps) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">🔍</div>
      <h3>No se encontraron resultados</h3>
      <p>No encontramos imágenes para &quot;{query}&quot;</p>
      <p>Intenta con otros términos de búsqueda</p>
    </div>
  );
};

export default EmptyState;
