import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">
        <Link className="logo" to="/">
          FakeTemu
        </Link>
      </h2>
      <ul className="categorias">
        <Link className="cat" to="/category/Masculino">
          Masculino
        </Link>
        <Link className="cat" to="/category/Femenino">
          Femenino
        </Link>
      </ul>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};
