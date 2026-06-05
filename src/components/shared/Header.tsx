import { useState } from 'react';
import Error from './Error';
import logo from '../../assets/img/logo.png';
import { version } from '../../../package.json';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
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
    if (value.trim()) {
      guardarError(false);
    }
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
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <a href="/" className="logo-text">
          PIXIMG
        </a>{' '}
        v.{version}
      </div>

      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      <nav className="nav">
        <ul className="menu">
          <li>
            <input
              className="input-elevated"
              type="text"
              name="query"
              placeholder="Buscar..."
              value={termino}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </li>
          <li>
            <button className="button" onClick={handleButtonClick}>
              Buscar
            </button>
          </li>
          {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
