import { useState } from 'react';
import { Search, Moon, Sun } from 'lucide-react';
import Error from './Error';
import logo from '../../assets/img/logo.png';
import { version } from '../../../package.json';

interface HeaderProps {
  onSearch: (query: string) => void;
  theme?: 'light' | 'dark';
  onThemeToggle?: () => void;
}

const Header = ({ onSearch, theme, onThemeToggle }: HeaderProps) => {
  const [termino, guardarTermino] = useState('');
  const [error, guardarError] = useState(false);

  const buscarImagenes = () => {
    if (!termino.trim()) {
      guardarError(true);
      return;
    }
    guardarError(false);
    onSearch(termino);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    guardarTermino(value);
    if (value.trim()) guardarError(false);
    onSearch(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') buscarImagenes();
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    buscarImagenes();
  };

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <img src={logo} alt="PIXIMG logo" className="logo-img" />
          <span className="logo-text">PIXIMG</span>
          <span className="logo-version">v{version}</span>
        </a>

        <div className="search-form">
          <div className="search-input-wrapper">
            <span className="search-icon" aria-hidden="true">
              <Search size={16} />
            </span>
            <input
              className="input-elevated"
              type="text"
              name="query"
              placeholder="Buscar..."
              value={termino}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              aria-label="Término de búsqueda"
            />
          </div>
          <button
            className="btn-search"
            onClick={handleButtonClick}
            aria-label="Buscar imágenes">
            Buscar
          </button>
        </div>

        <div className="header-actions">
          {onThemeToggle && (
            <button
              className="btn-icon btn-icon--theme"
              onClick={onThemeToggle}
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}>
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="header-error-bar">
          <Error mensaje="Agrega un término de búsqueda" inline />
        </div>
      )}
    </header>
  );
};

export default Header;
