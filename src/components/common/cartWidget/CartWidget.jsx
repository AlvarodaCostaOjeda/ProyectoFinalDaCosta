import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../context/CartContext";
import "./cartWidget.css";

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <div className="iconoCarrito">
      <section>
        <FaShoppingCart size={25} />
      </section>
      <h3>{total}</h3>
    </div>
  );
};
