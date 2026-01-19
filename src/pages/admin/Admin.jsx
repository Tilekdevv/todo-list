import React, { useState } from "react";
import scss from "./Admin.module.scss";
import { useProduct } from "../../context/MainContext";

const Admin = () => {
  const { addProduct } = useProduct();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleClick = () => {
    const newProduct = {
      name: name,
      price: price,
      img: img,
      id: Date.now(),
    };
    addProduct(newProduct);
  };
  return (
    <div>
      <div className="container">
        <div className={scss.admin_tema}>
          <h1>CREATE PRODUCT</h1>
        </div>
        <div className={scss.admin}>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="food name"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="price"
          />
          <input
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="place for a photo"
          />
          <button onClick={handleClick}>create</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
