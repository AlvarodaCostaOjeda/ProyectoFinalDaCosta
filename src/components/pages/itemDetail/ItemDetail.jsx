import { useEffect, useState } from "react";
import "./itemDetail.css";
import { useParams } from "react-router";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams(); // { propiedad: valor }

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);

    const getProduct = getDoc(refDoc);
    getProduct
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      <div>
        <img className="image" src={item.imageUrl} alt="" />
      </div>
      <div className="divCounter">
        <h1 className="itemTitle">{item.title}</h1>
        <p className="itemDescription">{item.description}</p>
        <Counter item={item} />
      </div>
    </div>
  );
};

export default ItemDetail;
