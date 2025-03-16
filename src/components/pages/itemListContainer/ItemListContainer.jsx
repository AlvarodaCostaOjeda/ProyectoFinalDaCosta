import { useEffect, useState } from "react";

import { ProductCard } from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import "./itemListContainer.css";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let consulta = refCollection;
    if (name) {
      consulta = query(refCollection, where("category", "==", name));
    }
    const getProducts = getDocs(consulta);

    getProducts
      .then((res) => {
        const nuevoArray = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(nuevoArray);
      })
      .catch((error) => console.log(error));
  }, [name]);

  // const cargar = () => {
  //   let refCollection = collection(db, "products");
  //   products.forEach((product) => {
  //     addDoc(refCollection, product);
  //   });
  // };

  return (
    <div>
      <h2 className="misProductos">Lista de productos:</h2>

      <section className="productCard">
        {/* <button onClick={cargar}>cargar productos</button> */}

        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
};
