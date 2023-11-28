import React from "react";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./index.scss";

const Product = ({ name, unitPrice, product }) => {
  const { basket, setBasket } = useContext(BasketContext);

  const addToBasket = (product) => {
    const findProduct = basket.find((item) => item.id === product.id);
    if (findProduct) {
      findProduct.count++;
      setBasket([...basket]);
      return;
    }
    setBasket([...basket, { ...product, count: 1 }]);
  };

  return (
    <ul className="product">
      <li>{name}</li>
      <li>{unitPrice}</li>
      <li>
        <button onClick={() => addToBasket(product)}>Add to BASKET</button>
      </li>
    </ul>
  );
};

export default Product;
