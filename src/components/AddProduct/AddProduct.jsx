import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddProduct({ show, handleClose, handleAddProduct }) {
  // ? Состояние для инпутов
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  function handleAdd() {
    if (!name || !surname || !phone || !email || !image) {
      alert("Заполните все поле!!!!");
      return;
    }

    let newObj = {
      name,
      surname,
      phone,
      email,
      image,
      id: Date.now(),
    };
    handleAddProduct(newObj);

    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
    setImage("");
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="my-3"
              placeholder="Name"
            />
            <FormControl
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="my-3"
              placeholder="Surname"
            />
            <FormControl
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="my-3"
              placeholder="Phone"
            />
            <FormControl
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="my-3"
              placeholder="E-mail"
            />
            <FormControl
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="my-3"
              placeholder="Image URL"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;
