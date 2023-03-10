import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditProduct({
  handleEditClose,
  showEditModal,
  editProduct,
  handleSave,
}) {
  const [productToEdit, setProductToEdit] = useState(editProduct);

  useEffect(() => {
    setProductToEdit(editProduct);
  }, [editProduct]);

  const editName = (e) => {
    let newObj = {
      ...productToEdit,
      name: e.target.value,
    };
    setProductToEdit(newObj);
  };
  const editSurname = (e) => {
    let newObj = {
      ...productToEdit,
      surname: e.target.value,
    };
    setProductToEdit(newObj);
  };
  const editPhone = (e) => {
    let newObj = {
      ...productToEdit,
      phone: e.target.value,
    };
    setProductToEdit(newObj);
  };
  const editEmail = (e) => {
    let newObj = {
      ...productToEdit,
      email: e.target.value,
    };
    setProductToEdit(newObj);
  };
  const editImage = (e) => {
    let newObj = {
      ...productToEdit,
      image: e.target.value,
    };
    setProductToEdit(newObj);
  };

  return (
    <>
      <Modal show={showEditModal} onHide={(handleEditClose) => {}}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={productToEdit.name}
              onChange={editName}
              className="my-3"
              placeholder="Name"
            />
            <FormControl
              value={productToEdit.surname}
              onChange={editSurname}
              className="my-3"
              placeholder="Surname"
            />
            <FormControl
              value={productToEdit.phone}
              onChange={editPhone}
              className="my-3"
              placeholder="Phone"
            />
            <FormControl
              value={productToEdit.email}
              onChange={editEmail}
              className="my-3"
              placeholder="E-mail"
            />
            <FormControl
              value={productToEdit.image}
              onChange={editImage}
              className="my-3"
              placeholder="Image"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(productToEdit)}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProduct;
