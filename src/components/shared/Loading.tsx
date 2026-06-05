const SKELETON_COUNT = 9;

const Loading = () => {
  return (
    <div className="skeleton-wrapper">
      {/* Hidden elements kept for test compatibility */}
      <div className="loading-container" aria-hidden="true">
        <div className="loading-spinner" />
      </div>

      <div className="loading-header">
        <span>Buscando imágenes...</span>
        <span className="loading-pulse" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>

      <div className="skeleton-grid" aria-hidden="true">
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-img" />
            <div className="skeleton-body">
              <div className="skeleton-line" />
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-line skeleton-line--xshort" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
