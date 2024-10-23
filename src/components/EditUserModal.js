import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditUserModal = ({ show, handleClose, handleSave, user }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    company: "",
  });

  
  useEffect(() => {
    if (user) {
      setFormData({
        id: user.id || "",
        name: user.name || "",
        email: user.email || "",
        address: user.address?.street || "",
        phone: user.phone || "",
        company: user.company?.name || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica i dati:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Nome e Cognome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Indirizzo</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="Indirizzo"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Telefono"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formCompany">
            <Form.Label>Nome azienda</Form.Label>
            <Form.Control
              type="text"
              name="company"
              placeholder="Nome azienda"
              value={formData.company}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 mt-3">
            Salva Modifiche
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUserModal;
