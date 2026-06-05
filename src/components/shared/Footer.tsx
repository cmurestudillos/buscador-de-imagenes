import { GitBranch, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © {year} Diseñado y desarrollado por <strong>Carlos Mur</strong>
        </p>

        <div className="footer-links">
          <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <ExternalLink size={13} />
            Pixabay API
          </a>
          <a href="https://github.com/cmurestudillos" target="_blank" rel="noopener noreferrer" className="footer-link">
            <GitBranch size={13} />
            GitHub
          </a>
        </div>

        <span className="footer-badge">
          Hecho con <Heart size={11} style={{ display: 'inline', verticalAlign: 'middle' }} /> en React
        </span>
      </div>
    </footer>
  );
};

export default Footer;
