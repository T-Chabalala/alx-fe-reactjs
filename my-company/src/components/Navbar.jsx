import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    borderBottom: '2px solid #000', // visually separates navbar without backgroundColor
    color: '#000'
  };

  const linkStyle = { color: '#000', textDecoration: 'none', fontWeight: 'bold' };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
