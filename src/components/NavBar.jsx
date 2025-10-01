import CartWidget from './CartWidget';

function NavBar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.8rem 2rem',
    background: '#1c1c1c',
    color: '#f1f1f1',
    fontFamily: 'Arial, sans-serif',
    position: 'sticky',
    top: 0,
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  };

  const liStyle = {
    cursor: 'default',
    fontWeight: '500',
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="/logo.png" alt="3DStore Logo" style={{ height: '40px' }} />
        <span style={{ color: '#00e0b8', fontWeight: 'bold', fontSize: '1.2rem' }}>3DStore</span>
      </div>

      <ul style={ulStyle}>
        <li style={liStyle}>Inicio</li>
        <li style={liStyle}>Figuras</li>
        <li style={liStyle}>Accesorios</li>
        <li style={liStyle}>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
