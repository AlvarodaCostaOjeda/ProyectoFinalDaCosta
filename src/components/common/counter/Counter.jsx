import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import "./counter.css";
import { GrAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import { toast } from "sonner";

const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (item.stock > contador) {
      setContador(contador + 1);
    } else {
      toast.error("Has llegado al limite");
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let obj = { ...item, quantity: contador };
    addToCart(obj);
    toast.success("Se ha agregado correctamente", { duration: 5000 });
  };

  return (
    <div>
      <div className="counterComponent">
        <button className="quitar" onClick={restar}>
          <GrFormSubtract />
        </button>
        <button className="agregar" onClick={sumar}>
          <GrAdd />
        </button>
        <button className="agregarAlCarrito" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
      <div>
        <h2 className="cantidad">Cantidad: {contador}</h2>
      </div>
    </div>
  );
};

export default Counter;
