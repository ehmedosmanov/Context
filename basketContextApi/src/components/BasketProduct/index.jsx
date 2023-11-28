import React from "react";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./index.scss";
const BasketProduct = ({ id, name, unitPrice, count }) => {
  const { basket, setBasket } = useContext(BasketContext);
  const handleInc = (id) => {
    const findBasket = basket.find((x) => x.id === id);
    console.log(findBasket);
    if (findBasket) {
      findBasket.count++;
      setBasket([...basket])
    }
  };

  const handleDec = (id) => {
    const findBasket = basket.find((x) => x.id === id)
    findBasket.count--
    if(findBasket.count === 0) {
        setBasket(basket.filter((item) => item.id !== id));
        return
    }
    setBasket([...basket])
  }

  const removeFromBasket = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  }

  return (
    <ul className="basket-product">
      <li>{name}</li>
      <li>{unitPrice}</li>

      <li>
        <button onClick={() => handleInc(id)}>+</button>
        <span>{count}</span>
        <button onClick={() => handleDec(id)}>-</button>
      </li>
      <li>
        <button onClick={() => removeFromBasket(id)}>Delete</button>
      </li>
    </ul>
  );
};

export default BasketProduct;
