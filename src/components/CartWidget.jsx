import carrito from "../assets/img/carrito.png";

const CartWidget = () => {
  return (
    <div>
      <img src={carrito} alt="Carrito de compras" width="30" />
      <span>2</span>
    </div>
  );
};

export default CartWidget;
