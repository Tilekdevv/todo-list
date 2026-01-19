import React, { useEffect } from "react";
import { useProduct } from "../../context/MainContext";
import scss from "./Menu.module.scss";

const Menu = () => {
  const { product, readProduct, deleteProduct, addOrders } = useProduct();

  useEffect(() => {
    readProduct();
  }, [readProduct]);

  return (
    <div className="container">
      <div className={scss.menu_blogs}>
        {product.map((item, idx) => (
          <div key={idx} className={scss.menu}>
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <h3>{item.price}$</h3>
            <button
              onClick={() => {
                addOrders({ ...item });
              }}
              className={scss.btn}
            >
              to order
            </button>

            <button
              onClick={() => deleteProduct(item.id)}
              className={scss.btn1}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
