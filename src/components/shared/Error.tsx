import { AlertCircle } from 'lucide-react';

interface ErrorProps {
  mensaje: string;
  inline?: boolean;
}

const Error = ({ mensaje, inline = false }: ErrorProps) => {
  if (inline) {
    return <p className="errorMsg">{mensaje}</p>;
  }

  return (
    <div className="error-container">
      <div className="error-card" role="alert">
        <div className="error-icon-wrap" aria-hidden="true">
          <AlertCircle size={20} />
        </div>
        <div className="error-body">
          <h4>Error al buscar imágenes</h4>
          <p className="errorMsg">{mensaje}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
