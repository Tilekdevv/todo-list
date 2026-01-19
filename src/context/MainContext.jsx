import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const MainContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);

  function addProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("p")) || [];
    data.push(newProduct);
    localStorage.setItem("p", JSON.stringify(data));
    readProduct();
  }

  function readProduct() {
    let data = JSON.parse(localStorage.getItem("p")) || [];
    setProduct(data);
  }

  function deleteProduct(id) {
    let data = JSON.parse(localStorage.getItem("p")) || [];
    data = data.filter((item) => item.id !== id);
    localStorage.setItem("p", JSON.stringify(data));
    readProduct();
  }

  function addOrders(newOrders) {
    let data = JSON.parse(localStorage.getItem("orders")) || [];
    data.push(newOrders);
    localStorage.setItem("orders", JSON.stringify(data));
    readOrders();
  }

  function readOrders() {
    let data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrder(data);
  }

  function deleteOrders(id) {
    let data = JSON.parse(localStorage.getItem("orders")) || [];
    data = order.filter((item) => item.id !== id);
    localStorage.setItem("orders", JSON.stringify(data));
    readOrders();
  }

  const values = {
    addProduct,
    readProduct,
    product,
    deleteProduct,
    addOrders,
    deleteOrders,
    readOrders,
    order,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default MainContext;
