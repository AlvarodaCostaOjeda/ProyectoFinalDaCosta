import { Link } from "react-router";
import "./productCard.css";

export const ProductCard = ({ item }) => {
  return (
    <div className="container-card">
      <img style={{ width: "100px" }} src={item.imageUrl} alt="" />
      <h3 className="productName"> {item.title} </h3>
      <h3 className="price">
        $ {item.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
      </h3>
      <Link className="link" to={`/itemDetail/${item.id}`}>
        Ver detalle
      </Link>
    </div>
  );
};
