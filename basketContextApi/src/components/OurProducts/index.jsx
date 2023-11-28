import React from "react";
import Product from "../Product";
import "./index.scss";
import useLocaleStorage from "../../hooks/useLocaleStorage";
import useFetch from "../../hooks/useFetch";

const OurProducts = ({ handleToggle }) => {
  const baseUrl = "https://northwind.vercel.app/api/products";
  const { data, loading } = useFetch(baseUrl);
  if(!loading) {
    return <p>...loading</p>
  }

  return (
    <div className="products">
      <button className="open" onClick={handleToggle}>
        Open Sidebar
      </button>
      {data &&
        data.map((product) => (
          <Product
            key={product.id}
            product={product}
            id={product.id}
            name={product.name}
            unitPrice={product.unitPrice}
          />
        ))}
    </div>
  );
};

export default OurProducts;
