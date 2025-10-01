const ItemListContainer = ({ greeting }) => {
  return (
    <section 
      style={{ 
        padding: '3rem', 
        textAlign: 'center', 
        fontFamily: 'Arial, sans-serif' 
      }}
    >
      <h2 
        style={{ 
          fontSize: '2rem', 
          color: '#333' 
        }}
      >
        {greeting}
      </h2>
      <p style={{ color: '#555' }}>
        Explora nuestras figuras 3D únicas y personalizadas.
      </p>
    </section>
  );
};

export default ItemListContainer;
