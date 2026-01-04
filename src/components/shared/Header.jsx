import { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import logo from '../../assets/img/logo.png';
import { version } from '../../../package.json';

const Header = ({ onSearch }) => {
  const [termino, guardarTermino] = useState('');
  const [error, guardarError] = useState(false);

  const buscarImagenes = e => {
    e.preventDefault();

    // validar
    if (termino.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);

    // ✅ CAMBIO: Usar onSearch en lugar de guardarBusqueda
    onSearch(termino);

    // ✅ MEJORA: Limpiar el input después de buscar
    guardarTermino('');
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt=" Logo" className="logo-img" />
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
              onChange={e => guardarTermino(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && buscarImagenes(e)}
            />
          </li>
          <li>
            <button className="button" onClick={buscarImagenes}>
              Buscar
            </button>
          </li>
          {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
