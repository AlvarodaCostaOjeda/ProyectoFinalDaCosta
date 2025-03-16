import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <div>
      <div
        style={{
          margin: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {getTotalAmount() == 0 ? (
          <section>
            <div className="cartEmpty">
              <h2 className="cartEmptyTitle">Tu carrito esta vacio</h2>
              <p className="cartEmptyP">
                Debes elegir productos para verlos en el carrito!
              </p>
            </div>
          </section>
        ) : (
          <section className="section">
            {cart.map((product) => {
              return (
                <div className="cart" key={product.id}>
                  <h2 className="title">
                    {product.title + " x" + product.quantity}{" "}
                  </h2>
                  <h3>$ {product.price}</h3>

                  <button
                    className="quitButton"
                    onClick={() => removeById(product.id)}
                  >
                    Eliminar
                  </button>
                </div>
              );
            })}
            <div className="checkOutRecepie">
              <h2 className="totalApagar">El total a pagar es ${total}</h2>
            </div>
            <div className="contenedorBotonesCarrito">
              <div>
                <Link to="/checkout">Finalizar compra</Link>
              </div>
              <div className="contenedorBoton">
                <button className="vaciarCarrito" onClick={resetCart}>
                  Vaciar carrito
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Cart;
