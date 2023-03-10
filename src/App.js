import React, { useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  // ?                     ====== modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ?                     ====== modal

  // ? products
  const [products, setProducts] = useState([]);
  const [editProduct, setProductToEdit] = useState({});

  // ! create
  function handleAddProduct(newObj) {
    let newProducts = [...products];
    newProducts.push(newObj);
    setProducts(newProducts);
  }
  // ?

  // ! Edit
  const [showEditModal, setshowEditModal] = useState(false);
  const handleEditClose = () => setshowEditModal(false);
  const handleEditShow = () => setshowEditModal(true);

  function handleEdit(id) {
    let obj = products.filter((item) => item.id == id);
    setProductToEdit(obj[0]);
    handleEditShow();
  }

  function handleDelete(id) {
    let newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  }

  function handleSave(editedObj) {
    let newProducts = products.map((item) => {
      if (item.id === editedObj.id) {
        return editedObj;
      }
      return item;
    });
    console.log(newProducts);
    setProducts(newProducts);
    setshowEditModal(false);
  }

  return (
    <div>
      {/* <Employees /> */}
      <Header handleShow={handleShow} />
      <AddProduct
        handleAddProduct={handleAddProduct}
        show={show}
        handleClose={handleClose}
      />
      <ProductList
        handleShow={handleShow}
        products={products}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      {showEditModal && (
        <EditProduct
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
          editProduct={editProduct}
          handleSave={handleSave}
        />
      )}
    </div>
  );
};

export default App;
