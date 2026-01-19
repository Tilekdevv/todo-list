import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/MainContext";
import scss from "./Order.module.scss";
const Order = () => {
  const { deleteOrders, readOrders, order } = useProduct();
  const [count, setCount] = useState(1);

  useEffect(() => {
    readOrders();
  }, []);

  return (
    <div className="container">
      {order.map((item, idx) => (
        <div className={scss.order_cards} key={idx}>
          <div className={scss.order_card}>
            <img src={item.img} alt="" />
            <div className={scss.order_price}>
              <h3>{item.name}</h3>
              <p>{item.price * count} $</p>
            </div>
            <div className={scss.del}>
              <button
                className={scss.delete}
                onClick={() => {
                  deleteOrders(item.id);
                  alert("товар удалень");
                }}
              >
                delete order
              </button>
              <div className={scss.btn_plus}>
                <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
                  -
                </button>
                <p>{count} x</p>
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
