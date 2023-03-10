import React from "react";
import { Button } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
const ProductList = ({ products, handleDelete, handleEdit, handleShow }) => {
  return (
    <div>
      <center style={{ fontSize: "30px", margin: "20px" }}>Contact list</center>
      <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
        <Button variant="outline-warning" onClick={handleShow}>
          Add New Contact
        </Button>
      </div>

      {products.map((item) => (
        <ProductCard
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default ProductList;
